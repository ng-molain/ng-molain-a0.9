import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import * as _ from 'lodash';
import { Pagination, PageImpl } from '../../pagination/index';

@Component({
  selector: 'ml-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit {

  oneIndexedParameter = false;

  @Input() showSerial: boolean = false;
  @Input() showSelect: boolean = false;
  @Input() loading: boolean = false;

  @Input() clickRowToSelect: boolean;
  @Input() singleSelect: boolean;
  @Input() selectable: boolean = true;
  @Input() highlightSelected: boolean = true;

  @Input() rowActions: TemplateRef<any>;


  @Input() set columns(cols: any[]) {
    this.columnsVisible = cols;
  }

  @Input() set data(data: any[]) {
    this._data = data;
    this.pagination = new PageImpl(data, data.length);
  }
  get data() { return this._data; }
  private _data: any[] = [];

  get visibleData() {
    // console.log('Visible Data')
    return this.pagination.content;
  }

  get serialIndexStart(): number {
    const {number, size} = this.pagination;
    return (this.oneIndexedParameter ? number - 1 : number) * size + 1;
  }

  selection: any[];
  columnsVisible: any[];
  pagination: Pagination;

  get hasData(): boolean {
    return !_.isEmpty(this.data);
  }

  constructor() { }

  ngOnInit() {
    this.showSerial = true;
    this.showSelect = true;
  }

  updateSort(col) {
    if (!col.showSort) {
      return ;
    }

    const {sort} = col;
    switch (sort) {
      case 'ASC': 
        col.sort = 'DESC';
        break;
      case 'DESC':
        col.sort = null;
        break;
      default:
        col.sort = 'ASC';
    }
  }
}
