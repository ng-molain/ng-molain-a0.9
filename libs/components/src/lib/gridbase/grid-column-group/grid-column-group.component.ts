import { Component, OnInit, QueryList, ContentChildren, Input } from '@angular/core';
import { GridHeaderRowComponent } from '../grid-header-row/grid-header-row.component';
import { domHelper } from '../../base';

@Component({
  selector: 'ml-grid-column-group',
  templateUrl: './grid-column-group.component.html',
  styleUrls: ['./grid-column-group.component.scss']
})
export class GridColumnGroupComponent implements OnInit {
  @ContentChildren(GridHeaderRowComponent)
  rows: QueryList<GridHeaderRowComponent>;
  
  @Input() frozen: boolean;
  @Input() align: string;
  @Input() width: any;
  
  constructor() {
    this.frozen=!1;
    this.align="left";
    this.width=null;
  }

  ngOnInit() {
    this.width=domHelper.toStyleValue(this.width)
  }

}
