import { Component, OnInit, Input, TemplateRef, EventEmitter, Output } from '@angular/core';
import * as _ from 'lodash';
import { Pagination, PageImpl } from '../../pagination/index';
import { TableSelectionModel } from './selection-model';

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

  @Input() clickRowToSelect: boolean = true;
  @Input() multipleSelection: boolean = true;
  @Input() selectable: boolean = true;
  @Input() highlightSelected: boolean = true;

  @Input() rowActions: TemplateRef<any>;
  @Input() rowActionTitle: string;


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

  // selection: any[];
  columnsVisible: any[];
  pagination: Pagination;

  selection: TableSelectionModel;
  @Output() selectionChanged = new EventEmitter<any>();

  get hasData(): boolean {
    return !_.isEmpty(this.data);
  }

  constructor() { }

  ngOnInit() {
    // this.showSerial = true;
    this.showSelect = true;

    if (this.selectable) {
      this.selection = new TableSelectionModel(this.multipleSelection, [], true);
      this.selection.changed.subscribe((selected) => {
        this.selectionChanged.emit(selected);
      });
    }
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


  // selection start
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.visibleData.length;
    
    return numSelected === numRows;
  }

  selectAllToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.visibleData.forEach(row => {
        this.selection.select(row);
      });
    }
  }

  // selection end

  onRowClick($event: MouseEvent, row) {
    $event.stopPropagation();
    $event.preventDefault();

    if (this.clickRowToSelect) {
      const { ctrlKey, shiftKey } = $event;
      // console.log(ctrlKey, shiftKey);
      if (ctrlKey) {
        this.selection.toggle(row);
      } else {
        this.selection.clear();
        this.selection.select(row);
      }
    }
  }

}
