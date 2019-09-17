import { ElementRef, NgZone, Renderer2, EmbeddedViewRef } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { DragDropRegistryService } from './drag-drop-registry.service';
import { DraggableRef, DragHelperTemplate } from './draggable-ref';
import { Subscription, Subject } from 'rxjs';
import * as _ from 'lodash';
import { coerceElement } from '@angular/cdk/coercion';
import { moveItemInArray } from './drag-utils';
import { DragRefMoveEvent, DragRefStartEvent, DragRefEndEvent } from './draggable-ref.events';

interface CachedItemPosition {
    /** Instance of the drag item. */
    item: SortableItemRef;
    /** Dimensions of the item. */
    clientRect: ClientRect;
    /** Amount by which the item has been moved since dragging started. */
    offset: number;
}

type SortingEvent = DragRefMoveEvent;

let ID = 0;
const TRACK = false;
const DEBUG = false;

export interface SortableItemRef extends DraggableRef { };

export class SortableRef<T = any> {

    private _items: SortableItemRef[];
    // private _childSortables: SortableRef[];

    private _accept: string | ((dragRef, dropRef) => boolean);
    scope: string;

    private _placeholderWrapper: HTMLElement;
    private _placeholderWrapperRef: EmbeddedViewRef<any> | null;
    private _placeholderWrapperTemplate?: DragHelperTemplate | null;

    private _anyDragStartSubscription: Subscription;
    private _anyDragStopSubscription: Subscription;
    private _dragSubscriptions: Subscription[] = [];

    private _clientRects: ClientRect[];

    private _itemPositions: CachedItemPosition[];

    private _siblings: SortableRef[];
    private _activeSiblings: SortableRef[];
    private _isActivated: boolean = false;

    get entered(): boolean {
        return this._entered;
    }
    private _entered: boolean = false;
    overing: boolean = false;

    axis: 'x' | 'y';
    // floating: boolean = false;
    sort: boolean = true;

    _dragStarted: boolean = false;

    scroll: boolean = true;
    // 保持唯一，需要传入 Dom 元素的ID
    scrollHookSelector: string;
    // TODO change to config
    scrollSensitivity: number = 20;
    scrollSpeed: number = 20;

    instance: T;

    beforStarted = new Subject<any>();

    activated$ = new Subject<any>();
    /** Before stop */
    released$ = new Subject<any>();
    /** Maybe triggered during sorting、removing、receiving */
    changed$ = new Subject<any>();
    deactivated$ = new Subject<any>();
    /** out */
    leaved$ = new Subject<any>();

    /** over the container at first time, even if it nerver being moved out */
    entered$ = new Subject<any>();
    received$ = new Subject<any>();
    removed$ = new Subject<any>();
    sorting$ = new Subject<any>();
    started$ = new Subject<any>();
    /** same to stopped  */
    ended$ = new Subject<any>();
    /** same as updated of jquery-ui */
    dropped$ = new Subject<{
        item: SortableItemRef,
        container: SortableRef,
        currentIndex: number,
        previousContainer: SortableRef,
        previousIndex: number,
        isPointerOverContainer: boolean,
    }>();

    id = ++ID;

    constructor(
        public element: ElementRef<HTMLElement> | HTMLElement,
        private _document: Document,
        private _ngZone: NgZone,
        private _viewportRuler: ViewportRuler,
        private _dragDropRegistry: DragDropRegistryService<any, any>,
        private renderer: Renderer2,
    ) {
        this._anyDragStartSubscription = _dragDropRegistry.startDragging$.subscribe(dragRef => this._anyDragStarted(dragRef));
        this._anyDragStopSubscription = _dragDropRegistry.stopDragging$.subscribe(dragRef => this._anyDragStoped(dragRef));

        // coerceElement(element).append(`${this.id}`);
    }

    withItems(items: SortableItemRef[]): this {
        this._items = items;
        return this;
    }

    withAccept(accept: string | ((dragRef, dropRef) => boolean)): this {
        this._accept = accept;
        return this;
    }

    connectWith(sortables: SortableRef[]): this {
        this._siblings = sortables.slice();
        return this;
    }

    withPlaceholderWrapperTemplate(template: DragHelperTemplate | null): this {
        this._placeholderWrapperTemplate = template;
        return this;
    }

    despose() {
        this._anyDragStartSubscription.unsubscribe();
        this._anyDragStopSubscription.unsubscribe();
        this._removeDragSubscriptions();

    }

    getIndexOfItem(item: SortableItemRef): number {
        return _.indexOf(this._items, item);
    }

    isActivated(): boolean {
        return !!this._isActivated;
    }

    markAsActivated(event) {
        this._isActivated = true;
        this.activated$.next(event);
    }

    markAsDeactivated(event?) {
        this._isActivated = false;
        this.deactivated$.next(event);
    }

    isFloating(): boolean {
        return this.axis === 'x' || (!_.isEmpty(this._items) && this._isFloating(this._items[0].getRootElement()));
    }

    /** 
     * 主容器监听所有可能的 Drag starting，判断启动 drag 的是自己的直接子项时，监听其进一步动作 dragStart，move，end。
     * 为保持干净状态，启动时执行清理
     */
    private _anyDragStarted(dragRef: SortableItemRef) {
        // this.track('_anyDragStarted', dragRef);
        // TODO: fix to accept items
        if (!_.includes(this._items, dragRef)) {
            return;
        }
        this.debug(`_anyDragStarted, index of ${_.indexOf(this._items, dragRef)} child starting dragging.`);

        this._removeDragSubscriptions();
        this._dragSubscriptions.push(
            dragRef.started.subscribe((event) => this._handleDragStart(event)),
            dragRef.moved.subscribe((event) => this._handleDragMove(event)),
            // dragRef.released.subscribe((event) => this._handleDragRelease(event)),
            dragRef.ended.subscribe((event) => this._handleDragEnd(event)),
        );
    }

    /** 主容器监听所有的 Drag stopping，如果是自己的子项，且还没有 dragStart 时，则清理，否则在drag项的 end 响应中执行清理 */
    private _anyDragStoped(dragRef: SortableItemRef) {
        // this.track('_anyDragStoped', dragRef);
        if (!_.includes(this._items, dragRef)) {
            return;
        }
        this.debug(`_anyDragStoped, index of ${_.indexOf(this._items, dragRef)} child stoping dragging.`);

        if (!this._dragStarted) {
            this._removeDragSubscriptions();
        }
    }

    /** 
     * 主容器有子项 drag started，主容器准备 drag
     * 1. 同步参数
     * 2. 获取连接的容器
     * 3. drag 项创建 placeholder 和 preview 
     */
    private _handleDragStart(event: DragRefStartEvent) {
        this.track('_handleDragStart', event);
        this.beforStarted.next();

        this._dragStarted = true;

        const { source } = event;
        source.initDragHelpers();
        // this.debug('_handleDragStart, inited drag helpers',
        //     'placeholder: ', source.getPlaceholder(),
        //     '\n\tpreviewer: ', source.getPreview());

        this.started$.next({
            ...event,
            target: this
        });

        this.markAsActivated(event);

        // TODO: Filter active siblings
        this._activeSiblings = this._siblings;
        this._activeSiblings.forEach(it => it.markAsActivated(event));
        this.debug('_handleDragStart, mark active siblings activated', this._activeSiblings);

        // TODO: event 属性不一样，不能直接调用
        // 调用一下，避免开始拖拽时，给人阻塞一下的感觉
        // this._handleDragMove(event as DragRefMoveEvent);

        // this._cacheItemPositions();
        this.moveTimes = 0;
    }

    moveTimes = 0;
    /**
     * 中容器中子项 drag moved，
     * 1. connect containers
     * @param event 
     */
    private _handleDragMove(event: DragRefMoveEvent) {
        // this.track(`_handleDragMove ${this.moveTimes++}`, event)
        // this.track(`_handleDragMove ${this.moveTimes++}`)

        const innermostContainer = this._contactContainers(event);

        // this.debug(`_handleDragMove, after contact containers, innermostContainer is: `, innermostContainer)

        // scroll
        if ((!!innermostContainer && innermostContainer.scroll) || this.scroll) {
            if (this._scroll(event)) {
                if (!!innermostContainer) {
                    innermostContainer._cacheItemPositions(event.source);
                }
            }
        }

        if (!!innermostContainer) {

        }

        // this._sort(event);
        // expect must be found
        // if (innermostContainer === this) {
        //     this._sort(event);
        // }
    }

    private _handleDragRelease(event) {
        // const {source }: {source: SortableItemRef} = event;
        // const previousContainer = this;
        // const previousIndex = previousContainer.getIndexOfItem(source);

        // const currentIndex = _.findIndex(this._itemPositions, (it) => it.item === source);

    }

    /**
     * 主容器子项 drag ended
     * 1. 执行清理 
     * @param event 
     * @param initialContainer 
     */
    private _handleDragEnd(event: DragRefEndEvent) {
        const { source }: { source: SortableItemRef } = event;
        const previousIndex = this.getIndexOfItem(source);
        const currentIndex = _.findIndex(this._itemPositions, (it) => it.item === source);

        const eventObj = {
            item: source,
            container: undefined, // 不知道移动到哪儿去了。可以通过设置currentContainer属性解决，但是这样就不干净了？
            currentIndex: currentIndex,
            previousContainer: this,
            previousIndex: previousIndex,
            isPointerOverContainer: this._entered,
        };

        if (this.overing) {
            this.__end(event, this);
        } else {
            this.removed$.next(eventObj);
            this.dropped$.next(eventObj);
        }


        this.ended$.next(eventObj);

        this._activeSiblings.forEach(it => {
            it.cancel();
        });

        this._destoryPlaceholderWrapper();

        this._dragStarted = false;
        this._entered = false;
        this._removeDragSubscriptions();
        this.markAsDeactivated();
    }


    /**
     * Mark and emit pointer moved enter this container
     * 由 master container 调用
     * @param event 
     */
    private _enter(event: SortingEvent) {
        if (!this.isActivated || this._entered) {
            return;
        }

        this._entered = true;
        this.entered$.next({
            ...event,
            target: this
        });
    }

    /**
     * Mark and emit pointer leave this container
     * @param event 
     */
    private _leave(event: SortingEvent) {
        if (!this._entered) {
            return;
        }

        this._entered = false;
        this.leaved$.next({
            ...event,
            target: this
        })

        // const { source } = event;
        // if (!_.includes(this._items, source)) {
        //     this._removeDragSubscriptions();
        // }
    }

    cancel() {
        this.markAsDeactivated();

        if (!this._dragStarted) {
            this._entered = false;
            this._destoryPlaceholderWrapper();
        }

    }

    /**
     * 在目标容器区域内时执行，拖拽的目标容器（可能是发起者自己）
     * 由发起者容器调用，注意这里的 this 指的是 innermostContainer
     * 
     * // TODO: 重命名 `__start` 或者 重构调用，因为 item move 会持续调用
     * 
     * @param event 
     * @param initialContainer 
     */
    __start(event: SortingEvent, initialContainer: SortableRef) {
        const { source, pointerPosition } = event;
        // 1. enter current container if not entered
        // if (initialContainer === this) {
        // this._enter(event);
        // 仅标记 enter ，在 enter 方法中避免重复标记
        // 稍后直接调用 rearrange
        // } else {
        // 如果已经进入本 container，则不需要执行进入定位，直接调用重新定位
        // 否则，调用进入时定位
        if (!this.overing) {
            if (initialContainer != this) {
                this.beforStarted.next();
            }


            let itemWithLeastDistance = null;
            let direction = null;
            let leastIndex = null;

            if (!_.isEmpty(this._items)) {
                let dist = 10000;
                const floating = this.isFloating();

                this._items.forEach((item, index) => {
                    const itemElement = item.getRootElement();
                    if (!coerceElement(this.element).contains(itemElement)) {
                        return;
                    }

                    if (item === source) {
                        return;
                    }

                    const rect = itemElement.getBoundingClientRect();
                    const c = floating ? rect.left : rect.top;
                    const p = floating ? pointerPosition.x : pointerPosition.y;
                    const s = floating ? rect.width : rect.height;

                    let nearBottom = false;
                    if (p - c >= s / 2) {
                        nearBottom = true;
                    }

                    if (Math.abs(p - c) < dist) {
                        dist = Math.abs(p - c);
                        itemWithLeastDistance = item;
                        direction = nearBottom ? 'up' : 'down';
                        leastIndex = index;
                    }
                });
            }
            this.debug('over other start', direction, leastIndex);

            if (itemWithLeastDistance) {
                this._rearrange(event, direction, itemWithLeastDistance);
            } else {
                this._rearrange(event, direction);
            }
            this._cacheItemPositions(source);

            // Emit change events, see jquery-ui line 1099

            // Emit over event, and tag overing
            this.overing = true;
            this.__move(event, initialContainer);

            if (initialContainer !== this) {
                this._dragSubscriptions.push(
                    source.moved.subscribe((event) => this.__move(event, initialContainer)),
                    source.ended.subscribe((event) => this.__end(event, initialContainer)),
                );
            }

            this.track('start overing')
        } else {
            if (initialContainer === this) {
                this.__move(event, initialContainer);
            }
        }
        // }

        // 2. rearrange current container items

    }

    __move(event: SortingEvent, initialContainer: SortableRef) {
        if (!this.overing) {
            return;
        }
        // this.track('overing and moving')
        this._sort(event);
    }

    __end(event: DragRefEndEvent, initialContainer: SortableRef) {
        this.track(`end on last innermost container. `);
        if (!this.overing) {
            return;
        }

        const { source } = event;
        const previousContainer = initialContainer!;
        const previousIndex = previousContainer.getIndexOfItem(source);

        const currentIndex = _.findIndex(this._itemPositions, (it) => it.item === source);

        const eventObj = {
            item: source,
            container: this,
            currentIndex: currentIndex,
            previousContainer: previousContainer,
            previousIndex: previousIndex,
            isPointerOverContainer: this._entered,
        };

        this.debug(`end on last container`, eventObj);

        if (previousContainer === this) {
            if (currentIndex >= 0 && currentIndex !== previousIndex) {
                this.dropped$.next(eventObj);
            }
        } else {
            if (currentIndex >= 0) {
                this.received$.next(eventObj);
                this.dropped$.next(eventObj);
            }
        }

        this.__stop(event, initialContainer);
    }

    __stop(event: DragRefEndEvent, initialContainer: SortableRef) {
        if (!this.overing) {
            return;
        }

        this.overing = false;
        this._destoryPlaceholderWrapper();
        this._cacheItemPositions();

        if (initialContainer !== this) {
            this._removeDragSubscriptions();
        }
    }

    // TODO: 会在拖动过程中频繁调用，但是该方法看起来又很复杂，会不会有性能问题？
    private _contactContainers(event: SortingEvent) {
        // this.track(`_contactContainers`, event);
        const { source, pointerPosition, delta } = event;
        const currentItem = source;
        const currentItemElement = currentItem.getRootElement();

        // 可能已包含自己，在上层去重...
        const containers = _.isEmpty(this._activeSiblings) ? [this] : _.concat(this, this._activeSiblings);

        let innermostContainer: SortableRef = null;

        // find innermost container
        containers.forEach((container) => {
            const containerElement = coerceElement(container.element);
            // Never consider a container that's located within the item itself.
            if (currentItemElement!.contains(containerElement)) {
                return;
            }

            if (this._intersectsWith(container, containerElement, pointerPosition, delta)) {
                if (!container.entered) {
                    container._enter(event);
                }

                // If we've already found a container and it's more "inner" than this, then continue
                if (innermostContainer && containerElement.contains(coerceElement(innermostContainer.element))) {
                    return;
                }

                innermostContainer = container;
                // mark Enter
            } else {
                // container dosen't intersect, emit "out" event if necessary

                // mark Leave
                if (container.entered) {
                    // mark out of container
                    container._leave(event);
                    // TODO: 0.3.14 重构，待处理
                }
            }
        });

        // this.debug(`_contactContainers, InnermostContainer was ${!!innermostContainer ? `found <Sortable - ${innermostContainer.id}>` : 'not found'}`);

        // TODO: 恢复或清理其他 container

        if (!!innermostContainer) {
            // TODO: 重命名 `__start` 或者 重构调用，因为 item move 会持续调用
            innermostContainer.__start(event, this);

            containers.filter(it => it !== innermostContainer).forEach(it => {
                it.__stop(event, this);
            })
        }

        return innermostContainer;
    }

    private _scroll(event: SortingEvent) {
        const { source, pointerPosition, delta } = event;
        const placeholder = (source as SortableItemRef).getPlaceholder(); // this._getPlaceholder(source);
        const scrollParent = getScrollParent(placeholder) as (HTMLElement | Document);
        const pointerY = pointerPosition.y;
        const pointerX = pointerPosition.x;
        const scrollSensitivity = this.scrollSensitivity || 20;
        const scrollSpeed = this.scrollSpeed || 20;
        let scrolled = false;

        if (!(scrollParent instanceof Document) && scrollParent.tagName !== "HTML") {
            const overflowOffset = getOffset(scrollParent);

            if ((overflowOffset.top + scrollParent.offsetHeight) -
                pointerY < scrollSensitivity) {
                if ((overflowOffset.top + scrollParent.offsetHeight) -
                    pointerY > -scrollSensitivity && delta.y === 1) {
                    scrollParent.scrollTop = scrollParent.scrollTop + scrollSpeed;
                    scrolled = true;
                }
            } else if (pointerY - overflowOffset.top < scrollSensitivity) {
                if ((pointerY - overflowOffset.top) > -scrollSensitivity && delta.y === -1) {
                    scrollParent.scrollTop = scrollParent.scrollTop - scrollSpeed;
                    scrolled = true;
                }
            }

            if ((overflowOffset.left + scrollParent.offsetWidth) -
                pointerX < scrollSensitivity) {
                if ((overflowOffset.left + scrollParent.offsetWidth) -
                    pointerX > -scrollSensitivity && delta.x === 1) {

                    scrollParent.scrollLeft = scrollParent.scrollLeft + scrollSpeed;
                    scrolled = true;
                }

            } else if (pointerX - overflowOffset.left < scrollSensitivity) {
                if (pointerX - overflowOffset.left > -scrollSensitivity && delta.x === -1) {
                    scrollParent.scrollLeft = scrollParent.scrollLeft - scrollSpeed;
                    scrolled = true;
                }
            }
        } else {
            const docElement = this._document.documentElement;
            if (pointerY - docElement.scrollTop < scrollSensitivity) {
                if (pointerY - docElement.scrollTop > -scrollSensitivity && delta.y === -1) {
                    docElement.scrollTop = docElement.scrollTop - scrollSpeed;
                    scrolled = true;
                }
            } else if (window.innerHeight - (pointerY - docElement.scrollTop) < scrollSensitivity) {
                if(window.innerHeight - (pointerY - docElement.scrollTop) > -scrollSensitivity && delta.y === 1) {
                    docElement.scrollTop = docElement.scrollTop + scrollSpeed;
                    scrolled = true;
                }
            }

            if (pointerX - docElement.scrollLeft < scrollSensitivity) {
                if (pointerX - docElement.scrollLeft > -scrollSensitivity && delta.x === -1) {
                    docElement.scrollLeft = docElement.scrollLeft - scrollSpeed;
                    scrolled = true;
                }
            } else if (window.innerWidth - (pointerX - docElement.scrollLeft) < scrollSensitivity) {
                if (window.innerWidth - (pointerX - docElement.scrollLeft) > -scrollSensitivity && delta.x === 1) {
                    docElement.scrollLeft = docElement.scrollLeft + scrollSpeed;
                    scrolled = true;
                }
            }
        }

        return scrolled;
    }

    private _sort(event: SortingEvent) {
        if (!this.overing) {
            return;
        }

        if (!this.sort) {
            return;
            // TODO: sccept the item, append it to the list 
        }

        const { source, pointerPosition, delta } = event;

        // const currentIndex = this._items.indexOf(source);
        // const currentRect = this._clientRects[currentIndex];
        // const placeholder = source.getPlaceholder();

        // this._clientRects.slice()
        this._items.slice().forEach((item, index) => {
            const itemElement = item.getRootElement();
            const intersection = this._intersectsWithPointer(itemElement, pointerPosition, delta);

            if (!intersection) {
                return;
            }

            if (item === source) {
                return;
            }

            // if ((intersection === 1 ? placeholder.previousSibling : placeholder.nextSibling) === itemElement) {
            //     return;
            // }

            const direction = intersection === 1 ? 'down' : 'up';

            if (this._intersectsWithSides(itemElement, pointerPosition, delta)) {
                this._rearrange(event, direction, item);

                // const currentIndex = _.findIndex(this._itemPositions, (it) => it.item === source);
                // // console.log(this.id, currentIndex, index)
                // const newIndex = _.findIndex(this._itemPositions, (it) => it.item === item);
                // this.debug(`sorted`, currentIndex, newIndex);
                // moveItemInArray(this._itemPositions, currentIndex, newIndex);
            }

            // TODO: Emit sorting
        });

    }

    private _cacheItemPositions(outerItem?: SortableItemRef) {
        const isHorizontal = this.isFloating();
        // this._itemPositions = (outerItem ? [...(this._items.filter(it => it !== outerItem)), outerItem] : this._items).map(item => {
        const items = this._items.filter(it => !this._dragDropRegistry.isDragging(it));
        this._itemPositions = (outerItem ? [...(items.filter(it => it !== outerItem)), outerItem] : items).map(item => {
            const elementToMeasure = this._dragDropRegistry.isDragging(item) ?
                this._getPlaceholder(item) :
                item.getRootElement();
            const clientRect = elementToMeasure.getBoundingClientRect();
            // console.log('rect', clientRect)

            return <CachedItemPosition>{
                item: item,
                offset: 0,
                clientRect: {
                    top: clientRect.top,
                    right: clientRect.right,
                    bottom: clientRect.bottom,
                    left: clientRect.left,
                    width: clientRect.width,
                    height: clientRect.height,
                }
            };
        }).sort((a, b) => {
            // console.log(a.clientRect.left - b.clientRect.left, a.clientRect, b.clientRect)
            // console.log((a.clientRect.left - b.clientRect.left) || (a.clientRect.top - b.clientRect.top))
            // return (a.clientRect.top - b.clientRect.top)
            return isHorizontal ?
                ((a.clientRect.left - b.clientRect.left) || (a.clientRect.top - b.clientRect.top)) :
                ((a.clientRect.top - b.clientRect.top) || (a.clientRect.left - b.clientRect.left));
        });
    }

    // 重新排列，待稳定之后刷新 containers positions and item positions
    private _rearrange(event, direction, item?: SortableItemRef, ) {
        const { source }: { source: SortableItemRef } = event;
        const placeholder = this._getPlaceholder(source);

        if (!!item) {
            const itemElement = item.getRootElement();
            itemElement.parentNode.insertBefore(placeholder, (direction === "down" ? itemElement : itemElement.nextSibling))
        } else {
            const containerElement = coerceElement(this.element);
            containerElement.appendChild(placeholder);
        }

        this._cacheItemPositions(source);
    }

    private _isOverAxis(x, reference, size) {
        return (x >= reference) && (x < (reference + size));
    }

    private _isFloating(item: HTMLElement) {
        const itemStyle = window.getComputedStyle(item);
        return (/left|right/).test(itemStyle.cssFloat) ||
            (/inline|table-cell/).test(itemStyle.display);
    }

    // Be careful with the following core functions
    private _intersectsWith(container: SortableRef, item: HTMLElement, pointerPosition: Point, delta: any) {
        // return this._intersectsWithPointer(item, pointerPosition, delta);
        const rect = coerceElement(container.element).getBoundingClientRect();
        const isOverElementHeight = (this.axis === 'x') || this._isOverAxis(pointerPosition.y, rect.top, rect.height);
        const isOverElementWidth = (this.axis === 'y') || this._isOverAxis(pointerPosition.x, rect.left, rect.width);

        const isOverElement = isOverElementHeight && isOverElementWidth;

        // if (this.tolerance === "pointer") {
        return isOverElement;
        // } else { 通过 Preview 计算是否交叉 }
    }

    private _intersectsWithPointer(item: HTMLElement, pointerPosition: Point, delta: any) {
        const rect = item.getBoundingClientRect();
        const isOverElementHeight = (this.axis === 'x') || this._isOverAxis(pointerPosition.y, rect.top, rect.height);
        const isOverElementWidth = (this.axis === 'y') || this._isOverAxis(pointerPosition.x, rect.left, rect.width);

        const isOverElement = isOverElementHeight && isOverElementWidth;

        if (!isOverElement) {
            return false;
        }

        // const { verticalDirection, horizontalDirection}: { x as  }
        const verticalDirection = delta.y;
        const horizontalDirection = delta.x;

        const floating = this.isFloating();// this.axis === 'x' || this._isFloating(item);
        return floating ?
            ((horizontalDirection === 1 || verticalDirection === 1) ? 2 : 1) :
            (verticalDirection && (verticalDirection === 1 ? 2 : 1));
    }

    private _intersectsWithSides(item: HTMLElement, pointerPosition: Point, delta: any) {
        const rect = item.getBoundingClientRect();
        const isOverBottomHalf = this._isOverAxis(pointerPosition.y, rect.top + (rect.height / 2), rect.height);
        const isOverRightHalf = this._isOverAxis(pointerPosition.x, rect.left + (rect.width / 2), rect.width);
        const verticalDirection = delta.y;
        const horizontalDirection = delta.x;

        const floating = this.isFloating(); // this.axis === 'x' || this._isFloating(item);

        if (floating && horizontalDirection) {
            return (horizontalDirection === 1 && isOverRightHalf) ||
                (horizontalDirection === -1 && !isOverRightHalf);
        } else {
            return verticalDirection &&
                ((verticalDirection === 1 && isOverBottomHalf) ||
                    (verticalDirection === -1 && !isOverBottomHalf));
        }

    }

    private _getPlaceholder(source: SortableItemRef): HTMLElement {
        // Wrapper 只对外部成员生效
        if (_.includes(this._items, source)) {
            if (source.mode === 'clone') {
                return source.getRootElement();
            } else {
                return source.getPlaceholder();
            }
        }

        let wrapper = this._placeholderWrapper;
        if (!wrapper && !!this._placeholderWrapperTemplate) {
            wrapper = this._placeholderWrapper = this._createPlaceholderWrapperElement();
        }

        if (!wrapper) {
            return source.getPlaceholder();
        }

        wrapper.appendChild(source.getPlaceholder());
        return wrapper;

    }

    private _createPlaceholderWrapperElement() {
        const wrapperConfig = this._placeholderWrapperTemplate;
        const wrapperTemplate = wrapperConfig ? wrapperConfig.template : null;
        let wrapper: HTMLElement;

        if (wrapperTemplate) {
            this._placeholderWrapperRef = wrapperConfig!.viewContainer.createEmbeddedView(
                wrapperTemplate,
                wrapperConfig!.context
            );
            wrapper = this._placeholderWrapperRef.rootNodes[0] as HTMLElement;
            wrapper.parentNode.removeChild(wrapper);
        } else {
            // placeholder = deepCloneNode(this._rootElement);
        }

        wrapper.classList.add('np-drag-placeholder-wrapper');
        return wrapper;
    }

    private _destoryPlaceholderWrapper() {
        if (this._placeholderWrapper) {
            removeElement(this._placeholderWrapper);
        }

        if (this._placeholderWrapperRef) {
            this._placeholderWrapperRef.destroy();
        }

        this._placeholderWrapper = this._placeholderWrapperRef = null!;
    }

    private _removeDragSubscriptions() {
        this.track(`_removeDragSubscriptions`)
        if (this._dragSubscriptions.length) {
            this._dragSubscriptions.forEach(it => it.unsubscribe());
        }
    }

    private _isAccept(dragRef): boolean {
        const accept = this._accept;
        let isAccept = false;
        if (_.isString(accept)) {
            const rootElement = coerceElement(dragRef.getRootElement());
            const element = coerceElement(dragRef.element);

            isAccept = isElementMatchSelector(rootElement, accept) || isElementMatchSelector(element, accept);
        } else if (_.isFunction(accept)) {
            isAccept = accept(dragRef, this);
        }

        return isAccept;
    }

    track(message: string, ...optionalParams: any[]) {
        if (!TRACK) {
            return;
        }
        console.log(`[Track]<Sortable - ${this.id}> : ${message} \n${!_.isEmpty(optionalParams) ? '\t' : ''}`, ...optionalParams);
    }

    debug(message: string, ...optionalParams: any[]) {
        if (!DEBUG) {
            return;
        }
        console.warn(`[Debug]<Sortable - ${this.id}> : ${message} \n${!_.isEmpty(optionalParams) ? '\t' : ''}`, ...optionalParams);
    }
}

interface Point {
    x: number;
    y: number;
}

function distanct(rectA: ClientRect, rectB: ClientRect) {
    return Math.sqrt(
        Math.pow(rectB.top - rectA.top, 2) + Math.pow(rectB.left - rectA.left, 2)
    );
}

function isElementMatchSelector(element: HTMLElement, selector: string) {
    return element.matches ? element.matches(selector) :
        (element as any).msMatchesSelector(selector);
}


/**
 * Helper to remove an element from the DOM and to do all the necessary null checks.
 * @param element Element to be removed.
 */
function removeElement(element: HTMLElement | null) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}

function getScrollParent(element: HTMLElement, includeHidden?: boolean) {
    const position = window.getComputedStyle(element).position;
    const excludeStaticParent = position === "absolute";
    const overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
    const scrollParent = getElementMatchParent(element, (parent) => {
        const parentCss = window.getComputedStyle(parent);
        if (excludeStaticParent && parentCss.position === "static") {
            return false;
        }
        return overflowRegex.test(parentCss.overflow + parentCss.overflowY +
            parentCss.overflowX);
    });

    return position === "fixed" || !scrollParent ?
        (element.ownerDocument || document) :
        scrollParent;
}

function getElementMatchParent(element: HTMLElement, predicate: (element: HTMLElement) => boolean) {
    const parent = element.parentElement;
    if (!parent) {
        return null;
    }

    const isMatch = predicate(parent);

    if (isMatch) {
        return parent;
    }

    return getElementMatchParent(parent, predicate);
}

function getOffset(element: HTMLElement): { top: number, left: number } {
    if (!element) {
        return;
    }

    const ownerDocument = element.ownerDocument;
    if (!ownerDocument) {
        return;
    }

    const docElement = ownerDocument.documentElement;
    if (!docElement.contains(element)) {
        return { top: 0, left: 0 };
    }

    const elRect = element.getBoundingClientRect();
    const win = window; // jquery 中有一堆...

    return {
        top: elRect.top + win.pageYOffset - docElement.clientTop,
        left: elRect.left + win.pageXOffset - docElement.clientLeft
    };

}