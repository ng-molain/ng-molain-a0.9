import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { GridColumnComponent } from '../grid-column/grid-column.component';

@Component({
  selector: 'ml-grid-footer',
  templateUrl: './grid-footer.component.html',
  styleUrls: ['./grid-footer.component.scss'],
  host:{class:"f-column f-noshrink"}
})
export class GridFooterComponent {
  @ViewChild("footer", {static: false})
  footerRef: ElementRef;

  @Input() columns: GridColumnComponent[];
  @Input() rows: any[];
  @Input() paddingWidth: number;

  private _scrollLeft;
  // scrollLeft: number;
  get scrollLeft(): number {
    return this._scrollLeft
  }
  set scrollLeft(value) {
    this._scrollLeft = value, this.footerRef.nativeElement.scrollLeft = value
  }

  constructor() {
    this.paddingWidth = 0;
    this._scrollLeft = 0;
  }


}
