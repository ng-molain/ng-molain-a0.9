import { Component, OnInit, EventEmitter, AfterContentInit, AfterViewInit, Input, Output, ContentChild, ViewChildren, QueryList } from '@angular/core';
import { Operators, DEFAULT_OPERATORS } from './operator-defs';
import { PageTemplateDirective } from '../template-base';

@Component({
  selector: 'ml-list-base',
  templateUrl: './list-base.component.html',
  styleUrls: ['./list-base.component.scss']
})
export class ListBaseComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ContentChild(PageTemplateDirective, {static: false})
  pageTemplate: PageTemplateDirective;
  // @ViewChildren(PaginationComponent)
  // pageRefs: QueryList<PaginationComponent>;
  pageRefs = [];

  @Input() border: boolean;
  @Input() loading: boolean;
  @Input() loadMsg: string;
  @Input() pagination: boolean;
  @Input() pagePosition: string;
  @Input() pageOptions: any;
  @Input() lazy: boolean;
  @Input() virtualScroll: boolean;
  @Input() rowHeight: number;
  @Input() pageNumber: number;
  @Input() pageSize: number;
  @Input() total: number;
  @Input() idField: string;
  @Input() selectionMode: string;
  @Input() filterable: boolean;
  @Input() filterRules: any[];
  @Input() filterDelay: number;
  @Input() filterMatchingType: string;
  @Input() filterPosition: string;
  @Input() filterBtnPosition: string;

  @Output() filterChange: EventEmitter<{}>;
  @Output() selectionChange: EventEmitter<{}>;
  @Output() pageChange: EventEmitter<{}>;
  @Output() rowSelect: EventEmitter<{}>;
  @Output() rowUnselect: EventEmitter<{}>;
  @Output() rowClick: EventEmitter<{}>;
  @Output() cellSelect: EventEmitter<{}>;
  @Output() cellUnselect: EventEmitter<{}>;
  @Output() cellClick: EventEmitter<{}>;

  _initialized: boolean;
  pageState: any;
  highlightRow: any;
  highlightCell: any;
  selectedRows: any[];
  selectedCells: any[];
  rows: any[];
  _data: any[];
  _filteredData: any[];
  _filterOperators: any;
  
  @Input()
  // selection: any;
  get selection(): any {
    return"single"==this.selectionMode?this.selectedRows[0]||null:"multiple"==this.selectionMode?this.selectedRows:"cell"==this.selectionMode?this.selectedCells[0]||null:"multicell"==this.selectionMode?this.selectedCells:null
  }
  set selection(value) {
    // if(null==value)return this.selectedRows=[],void(this.selectedCells=[]);"single"==this.selectionMode?this.selectedRows=[value]:"multiple"==this.selectionMode?this.selectedRows=value:"cell"==this.selectionMode?this.selectedCells=[value]:"multicell"==this.selectionMode&&(this.selectedCells=value)
    if(null==value) {
      this.selectedRows=[],void(this.selectedCells=[]);
      return ;
    }
    
    "single"==this.selectionMode?this.selectedRows=[value]:"multiple"==this.selectionMode?this.selectedRows=value:"cell"==this.selectionMode?this.selectedCells=[value]:"multicell"==this.selectionMode&&(this.selectedCells=value);
  }

  @Input()
  // data: any[];
  get data(): any[] {
    return this._data
  }
  set data(value) {
    this._initialized?this.setData(value):this._data=value
  }

  @Input()
  // filterOperators: any;
  get filterOperators(): any {
    return this._filterOperators
  }
  set filterOperators(value) {
    Object.assign(this._filterOperators,value)
  }
  
  constructor() { 
    this.border=!0;
    this.loading=!1;
    this.loadMsg="Processing, please wait ...";
    this.pagination=!1;
    this.pagePosition="bottom";
    this.pageOptions={};
    this.lazy=!1;
    this.virtualScroll=!1;
    this.rowHeight=30;
    this.pageNumber=1;
    this.pageSize=10;
    this.total=0;
    this.idField=null;
    this.selectionMode=null;
    this.filterable=!1;
    this.filterRules=[];
    this.filterDelay=400;
    this.filterMatchingType="all";
    this.filterPosition="bottom";
    this.filterBtnPosition="right";
    this.filterChange=new EventEmitter;
    this.selectionChange=new EventEmitter;
    this.pageChange=new EventEmitter;
    this.rowSelect=new EventEmitter;
    this.rowUnselect=new EventEmitter;
    this.rowClick=new EventEmitter;
    this.cellSelect=new EventEmitter;
    this.cellUnselect=new EventEmitter;
    this.cellClick=new EventEmitter;
    this._initialized=!1;
    this.selectedRows=[];
    this.selectedCells=[];
    this.rows=[];
    this._data=[];
    this._filteredData=[];
    this._filterOperators=this.defaultOperators;
  }

  ngOnInit(): void{
    this.pageOptions.total&&(this.total=this.pageOptions.total),this.pageOptions.pageNumber&&(this.pageNumber=this.pageOptions.pageNumber),this.pageOptions.pageSize&&(this.pageSize=this.pageOptions.pageSize),this.pageOptions.pageTemplate=this.pageTemplate
  }
  ngAfterContentInit(): void{
    this._initialized=!0,this.data=this.data
  }
  ngAfterViewInit(): void{}
  setData(value: any[]): void{
    if(null==value&&(value=[]),this._data=value,this.lazy?this._filteredData=this._data:(this.sortData(),this._filteredData=this.filterData(this._data)),this.setGroupData(),this.pagination)if(this.lazy)this._filteredData.length?this.rows=this._filteredData.slice(0,this.pageSize):this.total?this.onPageChange({pageNumber:this.pageNumber,pageSize:this.pageSize}):this.rows=[];else{this.total=this._filteredData.length;var start=(this.pageNumber-1)*this.pageSize;this.rows=this._filteredData.slice(start,start+this.pageSize)}else this.rows=this._filteredData
  }
  onPageChange(event: any): void{
    if(null==this.pageState||event.refresh||this.pageState.pageNumber!=event.pageNumber||this.pageState.pageSize!=event.pageSize){if(this.pageState=event,this.pageNumber=event.pageNumber,this.pageSize=event.pageSize,!this.lazy){var start=(this.pageNumber-1)*this.pageSize;this.rows=this._filteredData.slice(start,start+ +this.pageSize)}this.pageChange.emit(Object.assign(event,{filterRules:this.filterRules}))}
  }
  onVirtualPageChange(event: any): void{
    this.pageNumber=event.pageNumber,this.pageSize=event.pageSize,this.pageChange.emit(Object.assign(event,{filterRules:this.filterRules}))
  }
  onRowClick(row: any, event: any): void{
    this.rowClick.emit(row),"single"==this.selectionMode?this.selectRow(row):"multiple"==this.selectionMode&&(this.isSelected(row)?this.unselectRow(row):this.selectRow(row))
  }
  onCellClick(row: any, column: any, event: any): void{
    this.cellClick.emit({row:row,column:column}),"cell"==this.selectionMode?this.selectCell(row,column):"multicell"==this.selectionMode&&(this.isSelected(row,column)?this.unselectCell(row,column):this.selectCell(row,column))
  }
  sortData(): void{}
  setGroupData(): void{}
  filterData(data: any[]): any[]{
    var _this=this,isMatch=function(row){var rules=_this.filterRules;if(!rules.length)return!0;for(var i=0;i<rules.length;i++){var rule=rules[i],source=row[rule.field];null==source&&(source="");var matched=_this.filterOperators[rule.op].isMatch(source,rule.value);if("any"==_this.filterMatchingType){if(matched)return!0}else if(!matched)return!1}return"all"==_this.filterMatchingType};return data.filter(function(row){return isMatch(row)})
  }
  doFilter(rule?: any): void{
    void 0===rule&&(rule=null),rule&&(null==rule.value||""==rule.value?this.removeFilterRule(rule.field):this.addFilterRule(rule)),this.data=this.data,this.filterChange.emit(this.filterRules)
  }
  doEnter(): void{
    this.isCellSelectionMode()?this.highlightCell&&("cell"==this.selectionMode?this.selectCell(this.highlightCell.row,this.highlightCell.column):"multicell"==this.selectionMode&&(this.isSelected(this.highlightCell.row,this.highlightCell.column)?this.unselectCell(this.highlightCell.row,this.highlightCell.column):this.selectCell(this.highlightCell.row,this.highlightCell.column))):this.highlightRow&&("single"==this.selectionMode?this.selectRow(this.highlightRow):"multiple"==this.selectionMode&&(this.isSelected(this.highlightRow)?this.unselectRow(this.highlightRow):this.selectRow(this.highlightRow)))
  }
  getSelectedIndex(row: any): number{
    if(this.idField){for(var i=0;i<this.selectedRows.length;i++)if(this.selectedRows[i][this.idField]==row[this.idField])return this.selectedRows.splice(i,1,row),i;return-1}return this.selectedRows.indexOf(row)
  }
  getSelectedCellIndex(row: any, column: any): number{
    for(var i=0;i<this.selectedCells.length;i++){var cell=this.selectedCells[i];if(cell.column==column)if(this.idField){if(cell.row[this.idField]==row[this.idField])return i}else if(cell.row==row)return i}return-1
  }
  isCellSelectionMode(): boolean{
    return"cell"==this.selectionMode||"multicell"==this.selectionMode
  }
  isHighlighted(row: any, column?: any): boolean{
    if(void 0===column&&(column=null),this.isCellSelectionMode()){if(this.highlightCell&&this.highlightCell.row==row&&this.highlightCell.column==column)return!0}else if(this.highlightRow==row)return!0;return!1
  }
  isSelected(row: any, column?: any): boolean{
    if(void 0===column&&(column=null),this.isCellSelectionMode())return-1!=(index=this.getSelectedCellIndex(row,column));var index=this.getSelectedIndex(row);return-1!=index
  }
  selectRow(row: any): void{
    this.isCellSelectionMode()||this.isSelected(row)||("single"==this.selectionMode?(this.selection&&this.rowUnselect.emit(this.selection),this.selectedRows=[row]):"multiple"==this.selectionMode&&this.selectedRows.push(row),this.rowSelect.emit(row),this.selectionChange.emit(this.selection))
  }
  unselectRow(row: any): void{
    if(!this.isCellSelectionMode()){var index=this.getSelectedIndex(row);index>=0&&(this.selectedRows.splice(index,1),this.rowUnselect.emit(row),this.selectionChange.emit(this.selection))}
  }
  selectCell(row: any, column: any): void{
    this.isCellSelectionMode()&&(this.isSelected(row,column)||("cell"==this.selectionMode?(this.selection&&this.cellUnselect.emit(this.selection),this.selectedCells=[{row:row,column:column}]):"multicell"==this.selectionMode&&this.selectedCells.push({row:row,column:column}),this.cellSelect.emit({row:row,column:column}),this.selectionChange.emit(this.selection)))
  }
  unselectCell(row: any, column: any): void{
    if(this.isCellSelectionMode()){var index=this.getSelectedCellIndex(row,column);index>=0&&(this.selectedCells.splice(index,1),this.cellUnselect.emit({row:row,column:column}),this.selectionChange.emit(this.selection))}
  }
  clearSelections(): void{
    this.isCellSelectionMode()?this.selectedCells.length&&(this.selectedCells=[],this.selectionChange.emit(this.selection)):this.selectedRows.length&&(this.selectedRows=[],this.selectionChange.emit(this.selection))
  }
  navRow(step: number): void{
    if(this.rows.length){var index=this.rows.indexOf(this.highlightRow);-1==index?index=0:(index+=step)>=this.rows.length?index=this.rows.length-1:index<0&&(index=0),this.highlightRow=this.rows[index]}
  }

  // readonly defaultOperators: Operators;
  get defaultOperators(): Operators {
    // return DEFAULT_OPERATORS;
    return{nofilter:{text:"No Filter",isMatch:function(){return!0}},contains:{text:"Contains",isMatch:function(source,value){return source=String(source),value=String(value),source.toLowerCase().indexOf(value.toLowerCase())>=0}},equal:{text:"Equal",isMatch:function(source,value){return source==value}},notequal:{text:"Not Equal",isMatch:function(source,value){return source!=value}},beginwith:{text:"Begin With",isMatch:function(source,value){return source=String(source),value=String(value),0==source.toLowerCase().indexOf(value.toLowerCase())}},endwith:{text:"End With",isMatch:function(source,value){return source=String(source),value=String(value),-1!==source.toLowerCase().indexOf(value.toLowerCase(),source.length-value.length)}},less:{text:"Less",isMatch:function(source,value){return source<value}},lessorequal:{text:"Less Or Equal",isMatch:function(source,value){return source<=value}},greater:{text:"Greater",isMatch:function(source,value){return source>value}},greaterorequal:{text:"Greater Or Equal",isMatch:function(source,value){return source>=value}}}
  }

  getFilterRuleIndex(field: string): number{
    for(var i=0;i<this.filterRules.length;i++)if(this.filterRules[i].field==field)return i;return-1
  }
  getFilterRule(field: string): any{
    var index=this.getFilterRuleIndex(field);return-1!=index?this.filterRules[index]:null
  }
  addFilterRule(rule: any): void{
    var index=this.getFilterRuleIndex(rule.field);-1!=index?Object.assign(this.filterRules[index],rule):this.filterRules.push(rule)
  }
  removeFilterRule(field: string): void{
    var index=this.getFilterRuleIndex(field);-1!=index&&this.filterRules.splice(index,1)
  }

}
