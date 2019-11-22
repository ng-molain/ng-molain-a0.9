import { Component, OnInit, Input, TemplateRef, EventEmitter, Output, ElementRef, Inject } from '@angular/core';
import { coerceElement } from '@angular/cdk/coercion';
import { DOCUMENT } from '@angular/common';
import { Pagination, PageImpl } from '../../pagination/index';
import { TableSelectionModel } from './selection-model';
import * as _ from 'lodash';

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
    const { number, size } = this.pagination;
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

  get isScroll() {
    return true;
  }
  private _headerWrapper: HTMLElement;

  constructor(
    private readonly element: ElementRef,
    @Inject(DOCUMENT) private readonly document: any,
  ) { }

  ngOnInit() {
    // this.showSerial = true;
    this.showSelect = true;

    if (this.selectable) {
      this.selection = new TableSelectionModel(this.multipleSelection, [], true);
      this.selection.changed.subscribe((selected) => {
        this.selectionChanged.emit(selected);
      });
    }

    if (this.isScroll) {
      this._wrapScroll();
    }
  }

  updateSort(col) {
    if (!col.showSort) {
      return;
    }

    const { sort } = col;
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

  onHeaderCellResized() {
    // this._wrapScroll();
  }

  private _wrapScroll() {
    // this._refreshHeader();
  }

  private _refreshHeader() {
    const el = coerceElement<HTMLElement>(this.element).querySelector('div.ml-table-wrap');

    let wrapper: HTMLElement = this._headerWrapper;
    if (!!wrapper) {
      el.removeChild(wrapper);
      // 闪烁
    }
    wrapper = this._headerWrapper = this._createHeaderWrapper();
    // el.appendChild(wrapper);
  }

  private _createHeaderWrapper() {
    const el = coerceElement<HTMLElement>(this.element).querySelector('div.ml-table-wrap');
    const document = this.document as Document;



    const tbodyEl = el.querySelector("tbody");
    const tableEl = tbodyEl ? tbodyEl.parentElement : el.querySelector("table.ml-table") as HTMLTableElement;
    const theadEl = tableEl.querySelector("thead");
    theadEl.style.opacity = '0';
    tableEl.style.marginTop = '-21px'; // TODO: fix

    // const theadEl = el.querySelector("thead");
    const clonedTheadEl = theadEl.cloneNode(true) as HTMLElement;
    clonedTheadEl.style.opacity = '1';

    const headCells = theadEl.querySelectorAll("th");
    const clonedHeadCells = clonedTheadEl.querySelectorAll("th");
    headCells.forEach((oc, index) => {
      const rect = oc.getBoundingClientRect();
      const nc = clonedHeadCells[index];
      nc.style.width = `${rect.width}px`;
      nc.style.height = `${rect.height}px`;
    });

    const wrapper = document.createElement("div");
    wrapper.style.position = 'sticky'; // 'absolute';
    wrapper.style.top = '0';
    wrapper.style.left = '0';

    // const wrapperTable = document.createElement("table");
    const wrapperTable = tableEl.cloneNode(false);

    wrapper.appendChild(wrapperTable);
    wrapperTable.appendChild(clonedTheadEl);

    el.insertBefore(wrapper, tableEl);

    return wrapper;
  }

}
