import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { GridColumnComponent } from '../grid-column/grid-column.component';

@Component({
  selector: 'ml-grid-header-row',
  templateUrl: './grid-header-row.component.html',
  styleUrls: ['./grid-header-row.component.scss']
})
export class GridHeaderRowComponent {
  @ContentChildren(GridColumnComponent)
  columns: QueryList<GridColumnComponent>;

  constructor() { }

}
