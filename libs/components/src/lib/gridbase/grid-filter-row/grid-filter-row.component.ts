import { Component, OnInit, Input } from '@angular/core';
import { GridColumnComponent } from '../grid-column/grid-column.component';

@Component({
  // selector: 'ml-grid-filter-row',
  selector: '[mlGridFilterRow]',
  templateUrl: './grid-filter-row.component.html',
  styleUrls: ['./grid-filter-row.component.scss']
})
export class GridFilterRowComponent {

  @Input() columns: GridColumnComponent[];
  @Input() grid: any;


  constructor() {
    this.grid = null
  }

  isOnLeft(col: any): boolean {
    return !(!col.filterOperators || !col.filterOperators.length || "left" != this.grid.filterBtnPosition)
  }
  isOnRight(col: any): boolean {
    return !(!col.filterOperators || !col.filterOperators.length || "right" != this.grid.filterBtnPosition)
  }
  onFocusin(): void {
    var _this = this; setTimeout(function () { var header = _this.grid.view2.header, body = _this.grid.view2.body, scrollLeft = header.headerRef.nativeElement.scrollLeft; body.scrollLeft = scrollLeft })
  }
}
