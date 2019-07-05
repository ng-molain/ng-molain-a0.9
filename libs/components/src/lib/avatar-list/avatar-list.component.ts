import { Component, OnInit, AfterViewInit, OnChanges, ContentChildren, QueryList, AfterContentInit, OnDestroy, Input, NgZone, HostBinding, ViewEncapsulation } from '@angular/core';
import { AvatarListItemComponent } from './avatar-list-item.component';
import { Subject } from 'rxjs';
import { takeUntil, tap, take, startWith } from 'rxjs/operators';

@Component({
  selector: 'ml-avatar-list',
  templateUrl: './avatar-list.component.html',
  styleUrls: ['./avatar-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AvatarListComponent implements AfterContentInit, OnDestroy {

  private _inited = false;

  @ContentChildren(AvatarListItemComponent, { descendants: false })
  private _items!: QueryList<AvatarListItemComponent>;

  private _destroyed = new Subject();

  displayItems: AvatarListItemComponent[] = [];
  exceedCount = 0;

  itemStyleClass: string = 'ml-avatar-list__item';
  @Input('size') avatarSize: 'default' | 'large' | 'small' | number = 'default';
  @Input('shape') avatarShape: 'circle' | 'square' = 'circle';

  @Input() maxLength = 0;
  @Input() excessItemsStyle: any;

  @HostBinding('class.ml-avatar-list') _hostStyleClass = true;

  constructor(
    private _ngZone: NgZone
  ) { }

  ngAfterContentInit() {
    this._ngZone.onStable.asObservable()
      .pipe(take(1), takeUntil(this._destroyed))
      .subscribe(() => {
        this._items.changes.pipe(
          startWith(this._items),
          takeUntil(this._destroyed),
          tap((_items: QueryList<AvatarListItemComponent>) => this._update(_items.toArray()))
        ).subscribe();
      });
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  private _update(_items: AvatarListItemComponent[]) {
    const maxLength = this.maxLength > 0 ? this.maxLength : _items.length;
    const numOfChildren = _items.length;
    const numToShow = maxLength > 0 && maxLength >= numOfChildren ? numOfChildren : maxLength;
    
    this.displayItems = _items.slice(0, numToShow);
    this.exceedCount = numToShow < numOfChildren ? numOfChildren - maxLength : 0;
  }

}
