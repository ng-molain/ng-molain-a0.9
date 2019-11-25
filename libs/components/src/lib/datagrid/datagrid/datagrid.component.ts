import { Component, EventEmitter, Input, ContentChild, Output, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { DatagridGroupDirective } from '../directives/datagrid-group.directive';
import { DatagridDetailDirective } from '../directives/datagrid-detail.directive';
import { GridBaseComponent } from '../../gridbase';
import { domHelper } from '../../base';

@Component({
  selector: 'ml-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss'],
  host: {
    class: "f-column"
  }
})
export class DatagridComponent extends GridBaseComponent implements AfterContentInit {

  @ContentChild(DatagridGroupDirective, { static: false })
  groupTemplate: DatagridGroupDirective;
  @ContentChild(DatagridDetailDirective, { static: false })
  detailTemplate: DatagridDetailDirective;

  @Input()
  rowCss: any;
  @Input()
  idField: string;
  @Input()
  groupField: string;
  @Input()
  expanderWidth: number;
  @Output()
  rowExpand: EventEmitter<{}>;
  @Output()
  rowCollapse: EventEmitter<{}>;
  @Output()
  groupExpand: EventEmitter<{}>;
  @Output()
  groupCollapse: EventEmitter<{}>;
  // scrollTop: number;
  groupData: any[];
  expandedRows: any[];

  constructor(public cdRef: ChangeDetectorRef) {
    super(cdRef);

    this.rowCss = null;
    this.idField = null;
    this.groupField = null;
    this.expanderWidth = 30;
    this.rowExpand = new EventEmitter();
    this.rowCollapse = new EventEmitter();
    this.groupExpand = new EventEmitter();
    this.groupCollapse = new EventEmitter();
    this.groupData = null;
    this.expandedRows = [];
  }

  get scrollTop(): number {
    const body = this.view2.body;
    return body.isVirtualScroll ? body.vscroll.scrollTop : body.bodyRef.nativeElement.scrollTop;
  }

  set scrollTop(value: number) {
    const body = this.view2.body;
    body.isVirtualScroll ? body.vscroll.scrollTop = value : body.bodyRef.nativeElement.scrollTop = value;
  }

  setData(value: any[]): void {
    null == value && (value = []);
    
    // _super.prototype.setData.call(this, value)
    super.setData(value);
  }
  setGroupData(): void {
    var _this = this; if (this.groupField && !this.isGrouped(this._filteredData)) { this.groupData = this.makeGroup(this._filteredData), this._filteredData = this.makeGroupedRows(); var index_1 = 0; this._filteredData.forEach(function (row) { _this.isGroupRow(row) || (row._rowIndex = index_1++) }) }
  }
  ngAfterContentInit(): void {
    // _super.prototype.ngAfterContentInit.call(this), 
    super.ngAfterContentInit();

    this.virtualScroll && this.updateFrozenView(this.view2.body.scrollTop, this.rows)
  }
  updateFrozenView(scrollTop: number, rows: any[]): void {
    this.view1 && (this.view1.scrollTop = scrollTop, rows && (this.view1.rows = rows)), this.view3 && (this.view3.scrollTop = scrollTop, rows && (this.view3.rows = rows))
  }
  onBodyScroll(event: any): void {
    this.updateFrozenView(event.relativeTop || event.top, event.items)
  }
  getRowIndex(row: any): any {
    var body = this.view2.body, index = body.currRows.indexOf(row); return -1 == index ? -1 : body.vscroll ? index + body.vscroll.startIndex : this.pagination ? index + (this.pageNumber - 1) * this.pageSize : index
  }
  getAbsoluteIndex(index: number): any {
    var body = this.view2.body; return body.vscroll ? index + body.vscroll.startIndex : this.pagination ? index + (this.pageNumber - 1) * this.pageSize : index
  }
  scrollTo(row: any): void {
    var index = this.view2.body.currRows.indexOf(row); if (index >= 0) { var body = this.view2.body.bodyRef.nativeElement, tr = body.querySelector("table>tbody>tr:nth-child(" + (index + 1) + ")"); domHelper.scrollTo(body, tr), this.updateFrozenView(this.view2.body.scrollTop, this.rows) }
  }
  sortData(): void {
    var _this = this; if (this.sorts && this.sorts.length) { for (var cc = [], i = 0; i < this.sorts.length; i++)cc.push(this.findColumn(this.sorts[i].field)); var sortFunc = function (a, b) { return a == b ? 0 : a > b ? 1 : -1 }; this.data.sort(function (r1, r2) { for (var r = 0, i = 0; i < _this.sorts.length; i++) { var sort = _this.sorts[i]; if (r = cc[i] && cc[i].sorter ? cc[i].sorter(r1, r2) : sortFunc(r1[sort.field], r2[sort.field]), 0 != (r *= "asc" == sort.order ? 1 : -1)) return r } return r }) }
  }
  isGroupRow(row: any): boolean {
    return !!row._group_row
  }
  isGrouped(data: any): boolean {
    return !!(data && data.length && this.isGroupRow(data[0]))
  }
  getGroup(value: any, groups?: any[]): any {
    void 0 === groups && (groups = null), groups || (groups = this.groupData); for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) { var group = groups_1[_i]; if (group.value == value) return group } return null
  }
  makeGroup(data: any[]): any[] {
    for (var groups = [], _i = 0, data_1 = data; _i < data_1.length; _i++) { var row = data_1[_i]; if (!this.isGroupRow(row)) { var group = this.getGroup(row[this.groupField], groups); group ? group.rows.push(row) : (group = { value: row[this.groupField], collapsed: !1, rows: [row] }, groups.push(group)) } } return groups
  }
  makeGroupedRows(): any[] {
    for (var rows = [], _i = 0, _a = this.groupData; _i < _a.length; _i++) { var group = _a[_i]; rows.push({ _group_row: !0, value: group.value, rows: group.rows, collapsed: group.collapsed }), group.collapsed || (rows = rows.concat(group.rows)) } return rows
  }
  collapseGroup(value: any): void {
    var group = this.getGroup(value); group && (group.collapsed = !0, this.data = this.makeGroupedRows(), this.groupCollapse.emit(group))
  }
  expandGroup(value: any): void {
    var group = this.getGroup(value); group && (group.collapsed = !1, this.data = this.makeGroupedRows(), this.groupExpand.emit(group))
  }
  toggleGroup(value: any): void {
    var group = this.getGroup(value); group && (group.collapsed ? this.expandGroup(value) : this.collapseGroup(value))
  }
  getExpandedIndex(row: any): number {
    if (this.idField) { for (var i = 0; i < this.expandedRows.length; i++)if (this.expandedRows[i][this.idField] == row[this.idField]) return i; return -1 } return this.expandedRows.indexOf(row)
  }
  isRowExpanded(row: any): boolean {
    return -1 != this.getExpandedIndex(row)
  }
  collapseRow(row: any): void {
    var index = this.getExpandedIndex(row); index >= 0 && (this.expandedRows.splice(index, 1), this.rowCollapse.emit(row))
  }
  expandRow(row: any): void {
    this.isRowExpanded(row) || (this.expandedRows.push(row), this.rowExpand.emit(row))
  }
  toggleRow(row: any): void {
    this.isRowExpanded(row) ? this.collapseRow(row) : this.expandRow(row)
  }

}
