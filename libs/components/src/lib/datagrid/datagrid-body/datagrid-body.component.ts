import { Component, EventEmitter, ViewChild, Output, Input, Inject, Optional } from '@angular/core';
// import { DatagridViewComponent } from '../datagrid-view/datagrid-view.component';
import { GridBodyComponent } from '../../gridbase';
import { domHelper, VirtualScrollComponent } from '../../base';
import { ML_DATAGRID_VIEW, DatagridViewComponentInternal } from './datagrid-view.typings';

@Component({
  selector: 'ml-datagrid-body',
  templateUrl: './datagrid-body.component.html',
  styleUrls: ['./datagrid-body.component.scss'],
  host:{class:"f-column f-full"}
})
export class DatagridBodyComponent extends GridBodyComponent {
  // view: DataGridViewComponent;
  @ViewChild("vscroll", {static: false})
  vscroll: VirtualScrollComponent;
  @Output()
  virtualPageChange: EventEmitter<{}>;
  @Output()
  virtualPageUpdate: EventEmitter<{}>;
  marginTop: number;
  currRows: any[];
  _rows: any[];
  // rows: any[];
  // readonly isVirtualScroll: boolean;
  // scrollTop: number;
  // scrollLeft: number;
  // onVirtualScroll(event: any): void;
  // onVirtualPageChange(event: any): void;
  // onVirtualPageUpdate(event: any): void;
  // readonly scrollbarWidth: number;

  constructor(@Inject(ML_DATAGRID_VIEW) @Optional() public view: DatagridViewComponentInternal) {
    super();
    // this.view=view;
    this.virtualPageChange = new EventEmitter();
    this.virtualPageUpdate = new EventEmitter();
    this.marginTop = 0;
    this.currRows = [];
    this._rows = [];
  }

  @Input()
  get rows() {
    return this._rows
  }

  set rows(value) {
    this._rows = value || [], this.currRows = this._rows, this.view.grid.virtualScroll && 2 != this.view.viewIndex && (this.currRows = this._rows.slice(0, 2 * this.view.grid.pageSize))
  }

  get isVirtualScroll() {
    return !(!this.view.grid.virtualScroll || 2 != this.view.viewIndex)
  }

  // set isVirtualScroll(value) {

  // }

  get scrollTop() {
    return this.isVirtualScroll ? this.vscroll.relativeScrollTop : this.bodyRef.nativeElement.scrollTop
  }

  set scrollTop(value) {
    this.isVirtualScroll || (this.marginTop = -value)
  }

  // get scrollLeft() {

  // }

  set scrollLeft(value) {
    this.isVirtualScroll ? this.vscroll.scrollLeft = value : this.bodyRef.nativeElement.scrollLeft = value
  }

  get scrollbarWidth() {
    return this.vscroll ? this.vscroll.scrollbarWidth : domHelper.outerWidth(this.bodyRef.nativeElement) - domHelper.outerWidth(this.innerRef.nativeElement)
  }

  // set scrollbarWidth(value) {

  // }

  onVirtualScroll(event: any): void {
    this.bodyScroll.emit(event)
  }

  onVirtualPageChange(event: any): void {
    this.view.grid.onVirtualPageChange(event)
  }

  onVirtualPageUpdate(event: any): void {
    this.currRows = event, this.view.grid.updateFrozenView(this.vscroll ? this.vscroll.scrollTop : 0, this.currRows)
  }

}
