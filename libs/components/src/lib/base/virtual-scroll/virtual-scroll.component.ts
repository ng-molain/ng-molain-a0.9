import { Component, OnInit, AfterViewInit, ElementRef, EventEmitter, ChangeDetectorRef, Renderer2, ViewChild, Input, Output} from '@angular/core';
import { domHelper } from '../dom-helper';

@Component({
  selector: 'ml-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent implements AfterViewInit {

  // cdRef: ChangeDetectorRef;
  // render: Renderer2;
  @ViewChild("body", {static: false})
  bodyRef: ElementRef;
  @ViewChild("top", {static: false})
  topRef: ElementRef;
  @ViewChild("bottom", {static: false})
  bottomRef: ElementRef;
  @ViewChild("content", {static: false})
  contentRef: ElementRef;
  
  @Input() width: any;
  @Input() minWidth: any;
  @Input() maxWidth: any;
  @Input() height: any;
  @Input() minHeight: any;
  @Input() maxHeight: any;
  @Input() lazy: boolean;
  @Input() rowHeight: number;
  @Input() maxDivHeight: number;
  @Input() maxVisibleHeight: number;
  @Input() pageNumber: number;
  @Input() pageSize: number;
  @Input() total: number;

  @Output("update") onUpdate: EventEmitter<{}>;
  @Output("pageChange") onPageChange: EventEmitter<{}>;
  @Output() bodyScroll: EventEmitter<{}>;

  private _data;
  @Input()
  // data: any[];
  get data(): any[] {
    return this._data
  }
  set data(value) {
    null == value && (value = []), this._data = value, this.fetchingPage = 0, this.lazy ? this._data.length ? (this.waitingPage = this.pageNumber, this.loadPage(this._data)) : this.total > 0 ? this.fetchPage(this.waitingPage) : this.loadPage(this._data) : (this.total = this._data.length, this.pageNumber = 1, this.waitingPage = 1, this.startIndex = 0, this.loadPage(this._data))
  }

  // scrollLeft: number;
  get scrollLeft(): number {
    return this.bodyRef.nativeElement.scrollLeft
  }
  set scrollLeft(value) {
    this.bodyRef.nativeElement.scrollLeft = value
  }

  // scrollTop: number;
  get scrollTop(): number {
    return this.bodyRef.nativeElement.scrollTop
  }
  set scrollTop(value) {
    this.bodyRef.nativeElement.scrollTop = value
  }

  // readonly relativeScrollTop: number;
  get relativeScrollTop(): number {
    return this.bodyRef.nativeElement.scrollTop - this.startIndex * this.rowHeight + this.deltaTopHeight
  }

  // readonly scrollbarWidth: number;
  get scrollbarWidth(): number {
    return domHelper.outerWidth(this.bodyRef.nativeElement) - domHelper.outerWidth(this.contentRef.nativeElement)
  }

  items: any[];
  waitingPage: number;
  startIndex: number;
  deltaTopHeight: number;
  topHeights: any[];
  bottomHeights: any[];
  populateTimer: any;
  isUpdating: boolean;
  isNewFetching: boolean;

  constructor(public cdRef: ChangeDetectorRef, public render: Renderer2) {
    // this.cdRef=cdRef;
    // this.render=render;
    this.width = null;
    this.minWidth = null;
    this.maxWidth = null;
    this.height = null;
    this.minHeight = null;
    this.maxHeight = null;
    this.lazy = !1;
    this.rowHeight = 32;
    this.maxDivHeight = 1e7;
    this.maxVisibleHeight = 15e6;
    this.pageNumber = 1;
    this.pageSize = 10;
    this.total = 0;
    this.onUpdate = new EventEmitter;
    this.onPageChange = new EventEmitter;
    this.bodyScroll = new EventEmitter;
    this._data = [];
    this.items = [];
    this.waitingPage = 1;
    this.startIndex = 0;
    this.deltaTopHeight = 0;
    this.topHeights = [];
    this.bottomHeights = [];
    this.isUpdating = !1;
    this.isNewFetching = !1;
    this.fetchingPage = 0;
  }

  ngAfterViewInit(): void {
    var _this = this; this.render.listen(this.bodyRef.nativeElement, "scroll", function (event) { event.stopPropagation(), _this.isUpdating || _this.scrolling(), _this.bodyScroll.emit({ left: _this.bodyRef.nativeElement.scrollLeft, top: _this.scrollTop, relativeTop: _this.relativeScrollTop, items: _this.items }) })
  }

  scrolling(): void {
    this.isNewFetching = !1; var bodyHeight = domHelper.outerHeight(this.bodyRef.nativeElement), bodyOffset = domHelper.offset(this.bodyRef.nativeElement), top = domHelper.offset(this.contentRef.nativeElement).top - bodyOffset.top, bottom = top + domHelper.outerHeight(this.contentRef.nativeElement); if (top > bodyHeight || bottom < 0) { var scrollTop = this.bodyRef.nativeElement.scrollTop, index = Math.floor((scrollTop + this.deltaTopHeight) / this.rowHeight); (page = Math.floor(index / this.pageSize) + 1) > 0 && (this.isNewFetching = !0, this.startIndex = (page - 1) * this.pageSize, this.waitingPage = page, this.items = [], this.fetchPage(this.waitingPage)) } else if (top > 0) { if (0 == this.startIndex) return; page = Math.floor(this.startIndex / this.pageSize) + 1; this.waitingPage = page - 1, this.fetchPage(this.waitingPage) } else if (bottom < bodyHeight) { if (this.startIndex + this.items.length >= this.total) return; var page = Math.floor(this.startIndex / this.pageSize) + 1; this.items.length >= 2 * this.pageSize ? this.waitingPage = page + 2 : this.waitingPage = page + 1, this.fetchPage(this.waitingPage) }
  }

  populate(): void {
    var _this = this; this.isUpdating = !0; var bodyHeight = domHelper.outerHeight(this.bodyRef.nativeElement), topHeight = this.startIndex * this.rowHeight, bottomHeight = this.total * this.rowHeight - topHeight - this.items.length * this.rowHeight; this.topHeights = this.splitHeights(topHeight), this.bottomHeights = this.splitHeights(bottomHeight); var spos = this.bodyRef.nativeElement.scrollTop + this.deltaTopHeight; if (topHeight > this.maxVisibleHeight ? (this.deltaTopHeight = topHeight - this.maxVisibleHeight, this.topHeights = this.splitHeights(this.maxVisibleHeight)) : this.deltaTopHeight = 0, bottomHeight > this.maxVisibleHeight) this.bottomHeights = this.splitHeights(this.maxVisibleHeight); else if (0 == bottomHeight) { var lastCount = this.total % this.pageSize; lastCount && (this.bottomHeights = this.splitHeights(bodyHeight - lastCount * this.rowHeight)) } this.bodyRef.nativeElement.scrollTop = spos - this.deltaTopHeight, this.onUpdate.emit(this.items), this.cdRef.detectChanges(), clearTimeout(this.populateTimer), this.populateTimer = setTimeout(function () { _this.isNewFetching && (_this.bodyRef.nativeElement.scrollTop = spos - _this.deltaTopHeight), _this.isUpdating = !1, _this.scrolling() })
  }

  splitHeights(height: any): any[] {
    var count = Math.floor(height / this.maxDivHeight), leftHeight = height - this.maxDivHeight * count; height < 0 && (leftHeight = 0); for (var heights = [], i = 0; i < count; i++)heights.push(this.maxDivHeight); return heights.push(leftHeight), heights
  }

  loadPage(items: any): void {
    if (this.pageNumber == this.waitingPage) { items = items.slice(0, this.pageSize); var page = Math.floor(this.startIndex / this.pageSize) + 1; page == this.waitingPage ? (this.items = items, this.populate()) : this.waitingPage == page + 1 ? (this.items = this.items.slice(0, this.pageSize).concat(items), this.populate()) : this.waitingPage == page + 2 ? (this.startIndex += this.pageSize, this.items = this.items.slice(this.pageSize, 2 * this.pageSize).concat(items), this.populate()) : this.waitingPage == page - 1 ? (this.startIndex -= this.pageSize, this.items = items.concat(this.items.slice(0, this.pageSize)), this.populate()) : (this.startIndex = (this.pageNumber - 1) * this.pageSize, this.items = items, this.populate()) }
  }

  private fetchingPage;
  fetchPage(page: number): void {
    if (this.fetchingPage != page) { if (this.fetchingPage = page, !this.lazy) { var start = (page - 1) * this.pageSize, items = this.data.slice(start, start + this.pageSize); this.pageNumber = page, this.loadPage(items) } this.onPageChange.emit({ pageNumber: page, pageSize: this.pageSize }) }
  }

  gotoPage(page: number): void {
    this.startIndex = (page - 1) * this.pageSize, this.waitingPage = page, this.populate(), this.bodyRef.nativeElement.scrollTop = this.startIndex * this.rowHeight - this.deltaTopHeight, this.fetchPage(page)
  }

  refresh(): void {
    var page = Math.floor(this.startIndex / this.pageSize) + 1; this.waitingPage = page, this.fetchingPage = 0, this.fetchPage(page)
  }
}
