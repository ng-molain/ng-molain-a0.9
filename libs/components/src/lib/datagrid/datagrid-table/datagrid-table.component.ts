import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import { DatagridBodyComponent } from '../datagrid-body/datagrid-body.component';
import { DatagridComponent } from '../datagrid/datagrid.component';
import { domHelper } from '../../base';

@Component({
  // selector: 'ml-datagrid-table',
  selector: '[mlDataGridTable]',
  templateUrl: './datagrid-table.component.html',
  styleUrls: ['./datagrid-table.component.scss']
})
export class DatagridTableComponent {

  // gridBody: DataGridBodyComponent;
  @ViewChild("groupTitle", { static: false })
  groupTitleRef: ElementRef;
  @Input()
  columns: any;
  @Input()
  rows: any;

  grid: DatagridComponent;

  // readonly showExpandIcon: boolean;
  get showExpandIcon(): boolean {
    if (this.grid.leftColumns) { if (1 == this.gridBody.view.viewIndex) return !0 } else if (2 == this.gridBody.view.viewIndex) return !0; return !1
  }

  // readonly groupTitleWidth: any;
  get groupTitleWidth(): any {
    return domHelper.outerWidth(this.groupTitleRef.nativeElement)
  }

  // readonly titleLeft: number;
  get titleLeft(): number {
    return 2 == this.gridBody.view.viewIndex && this.grid.leftColumns && this.grid.view1 ? domHelper.outerWidth(this.grid.view1.body.bodyRef.nativeElement) - this.grid.expanderWidth : null
  }

  constructor(public gridBody: DatagridBodyComponent) {
    this.grid = gridBody.view.grid;
  }

  onRowClick(row: any, event: any): void {
    this.grid.rowClick.emit(row), "single" == this.grid.selectionMode ? this.grid.selectRow(row) : "multiple" == this.grid.selectionMode && (this.grid.isSelected(row) ? this.grid.unselectRow(row) : this.grid.selectRow(row))
  }
  onRowDblClick(row: any, event: any): void {
    this.grid.rowDblClick.emit(row)
  }
  onRowContextMenu(row: any, event: any): void {
    this.grid.rowContextMenu.emit({ row: row, originalEvent: event })
  }
  onCellClick(row: any, col: any, rowEl: any, cellEl: any, event: any): void {
    this.grid.onCellClick(row, col, event), (this.grid.clickToEdit || this.grid.dblclickToEdit && this.grid.editingItem) && this.doEdit(row, col, rowEl, cellEl)
  }
  onCellDblClick(row: any, col: any, rowEl: any, cellEl: any, event: any): void {
    this.grid.cellDblClick.emit({ row: row, column: col }), this.grid.dblclickToEdit && this.doEdit(row, col, rowEl, cellEl)
  }
  onCellContextMenu(row: any, col: any, event: any): void {
    this.grid.cellContextMenu.emit({ row: row, column: col, originalEvent: event })
  }
  onCellKeyDown(row: any, col: any, event: any): void {
    "cell" == this.grid.editMode && (13 == event.which ? (event.stopPropagation(), this.grid.endEdit()) : 27 == event.which && (event.stopPropagation(), this.grid.cancelEdit()))
  }
  doEdit(row: any, col: any, rowEl: any, cellEl: any): void {
    this.grid.beginEdit(row, col, rowEl), setTimeout(function () { var input = cellEl.querySelector(".textbox-text"); input && input.focus() })
  }
  onGroupExpanderClick(value: any, event: any): void {
    event.stopPropagation(), this.grid.toggleGroup(value)
  }
  onDetailExpanderClick(row: any, event: any): void {
    event.stopPropagation(), this.grid.toggleRow(row)
  }
  getRowIndex(rowIndex: number, row: any): any {
    return this.grid.groupField && (rowIndex = row._rowIndex), this.grid.getAbsoluteIndex(rowIndex)
  }
  getCss(css: any, row: any, value: any, type: string): any {
    if (css) { var cssValue = "function" == typeof css ? css(row, value) : css; return "class" == type ? "string" == typeof cssValue ? cssValue : null : "object" == typeof cssValue ? cssValue : null } return null
  }
  getRowClass(row: any): any {
    return this.getCss(this.grid.rowCss, row, null, "class")
  }
  getRowStyle(row: any): any {
    return this.getCss(this.grid.rowCss, row, null, "style")
  }
  getCellClass(column: any, row: any): any {
    return this.getCss(column.cellCss, row, row[column.field], "class")
  }
  getCellStyle(column: any, row: any): any {
    return this.getCss(column.cellCss, row, row[column.field], "style")
  }
  isEditable(row: any, col: any): boolean {
    return !(!this.grid.isEditing(row, col) || !col.editable)
  }
}
