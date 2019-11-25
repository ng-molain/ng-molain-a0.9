import { Component, OnInit, ContentChildren, ChangeDetectorRef, QueryList, ElementRef, EventEmitter, ViewChild, Input, Output } from '@angular/core';
import { GridColumnComponent } from '../grid-column/grid-column.component';
import { GridColumnGroupComponent } from '../grid-column-group/grid-column-group.component';
import { ListBaseComponent, domHelper } from '../../base';

@Component({
  selector: 'ml-grid-base',
  templateUrl: './grid-base.component.html',
  styleUrls: ['./grid-base.component.scss'],
  host:{class:"f-column"}
})
export class GridBaseComponent extends ListBaseComponent {

  // cdRef: ChangeDetectorRef;
  @ContentChildren(GridColumnComponent)
  columnRefs: QueryList<GridColumnComponent>;
  @ContentChildren(GridColumnGroupComponent)
  groupRefs: QueryList<GridColumnGroupComponent>;
  @ViewChild("view", {static: false})
  viewRef: ElementRef;
  @ViewChild("view1", {static: false})
  view1: any;
  @ViewChild("view2", {static: false})
  view2: any;
  @ViewChild("view3", {static: false})
  view3: any;

  @Input() rowHeight: number;
  @Input() rowCss: any;
  @Input() striped: boolean;
  @Input() frozenWidth: any;
  @Input() frozenAlign: string;
  @Input() sorts: any[];
  @Input() multiSort: boolean;
  @Input() showHeader: boolean;
  @Input() showFooter: boolean;
  @Input() editMode: string;
  @Input() clickToEdit: boolean;
  @Input() dblclickToEdit: boolean;
  @Input() columnResizing: boolean;

  @Output() rowDblClick: EventEmitter<{}>;
  @Output() cellDblClick: EventEmitter<{}>;
  @Output() rowContextMenu: EventEmitter<{}>;
  @Output() cellContextMenu: EventEmitter<{}>;
  @Output() pageChange: EventEmitter<{}>;
  @Output() sortChange: EventEmitter<{}>;
  @Output() editBegin: EventEmitter<{}>;
  @Output() editEnd: EventEmitter<{}>;
  @Output() editCancel: EventEmitter<{}>;
  editingItem: any;
  leftGroup: GridColumnGroupComponent;
  rightGroup: GridColumnGroupComponent;
  centerGroup: GridColumnGroupComponent;
  leftColumns: GridColumnComponent[];
  rightColumns: GridColumnComponent[];
  centerColumns: GridColumnComponent[];
  headerHeight: number;
  footerRows: any[];
  private _rows;
  private _footerData;
  private _filterRules;
  // readonly leftFrozenWidth: any;
  get leftFrozenWidth(): any {
    var width = this.leftGroup ? this.leftGroup.width : 0; return width || this.frozenWidth
  }
  // readonly rightFrozenWidth: any;
  get rightFrozenWidth(): any {
    var width = this.rightGroup ? this.rightGroup.width : 0; return width || this.frozenWidth
  }
  // readonly allColumns: any[];
  get allColumns(): any[] {
    var cc = []; return this.leftColumns && (cc = cc.concat(this.leftColumns)), this.centerColumns && (cc = cc.concat(this.centerColumns)), this.rightColumns && (cc = cc.concat(this.rightColumns)), cc
  }
  // rows: any[];
  get rows(): any[] {
    return this._rows
  }
  set rows(value) {
    this._rows = value || [], this.viewRef && this.cdRef && this.cdRef.detectChanges()
  }

  @Input()
  // footerData: any;
  get footerData(): any {
    return this._footerData
  }
  set footerData(value) {
    (value = value || []) instanceof Array ? this._footerData = value : this._footerData = [value], this.footerRows = this._footerData
  }

  @Input()
  // filterRules: any[];
  get filterRules(): any[] {
    var _this = this; return this._initialized && this._filterRules.forEach(function (r) { var col = _this.findColumn(r.field); col && (r.value = col.filterValue, r.op = col.filterOperator) }), this._filterRules
  }
  set filterRules(value) {
    var _this = this; this._filterRules = value, this._filterRules.forEach(function (r) { var col = _this.findColumn(r.field); col && (col.filterValue = r.value, col.filterOperator = r.op) })
  }

  // scrollTop: number;
  get scrollTop(): number {
    return this.view2.scrollTop
  }
  set scrollTop(value) {
    this.view2.scrollTop = value
  }

  constructor(public cdRef: ChangeDetectorRef) {
    super();

    // this.cdRef = cdRef;
    this.rowHeight = 28;
    this.rowCss = null;
    this.striped = !1;
    this.frozenWidth = "200px";
    this.frozenAlign = "left";
    this.sorts = [];
    this.multiSort = !1;
    this.showHeader = !0;
    this.showFooter = !1;
    this.editMode = null;
    this.clickToEdit = !1;
    this.dblclickToEdit = !1;
    this.columnResizing = !1;
    this.rowDblClick = new EventEmitter;
    this.cellDblClick = new EventEmitter;
    this.rowContextMenu = new EventEmitter;
    this.cellContextMenu = new EventEmitter;
    this.pageChange = new EventEmitter;
    this.sortChange = new EventEmitter;
    this.editBegin = new EventEmitter;
    this.editEnd = new EventEmitter;
    this.editCancel = new EventEmitter;
    this.editingItem = null;
    this.footerRows = [];
    this._rows = [];
    this._footerData = [];
    this._filterRules = [];
    this.headerResized = !1;
  }

  ngOnInit(): void { 
    // _super.prototype.ngOnInit.call(this),
    super.ngOnInit();

    this.frozenWidth=domHelper.toStyleValue(this.frozenWidth)
  }
  ngAfterContentInit(): void {
    var _this=this;this.initColumns(),this.groupRefs.changes.subscribe(function(){_this.initColumns(),_this.initHeaderHeight()}),this.columnRefs.changes.subscribe(function(){_this.initColumns(),_this.initHeaderHeight()}),this.filterRules=this.filterRules,
    
    // _super.prototype.ngAfterContentInit.call(this)
    super.ngAfterContentInit();
   }
  private headerResized;
  ngAfterViewChecked(): void { 
    var _this=this;this.headerResized||domHelper.isVisible(this.viewRef.nativeElement)&&setTimeout(function(){_this.initHeaderHeight(),_this.headerResized=!0})
  }
  initHeaderHeight(): void {
    this.view1&&(this.view1.headerHeight=null),this.view2&&(this.view2.headerHeight=null),this.view3&&(this.view3.headerHeight=null),this.cdRef.detectChanges();var h1=this.view1?this.view1.headerHeight:0,h2=this.view2?this.view2.headerHeight:0,h3=this.view3?this.view3.headerHeight:0;this.headerHeight=Math.max(h1,h2,h3),this.view1&&(this.view1.headerHeight=this.headerHeight),this.view2&&(this.view2.headerHeight=this.headerHeight),this.view3&&(this.view3.headerHeight=this.headerHeight)
   }
  initColumns(): void {
    var _this=this;if(this.leftGroup=null,this.leftColumns=null,this.rightGroup=null,this.rightColumns=null,this.centerGroup=null,this.centerColumns=null,this.groupRefs&&this.groupRefs.length&&this.groupRefs.forEach(function(g){var cc=_this.getColumnLayout(g),columns=cc[cc.length-1];g.frozen?"left"==g.align?(_this.leftGroup=g,_this.leftColumns=columns):(_this.rightGroup=g,_this.rightColumns=columns):(_this.centerGroup=g,_this.centerColumns=columns)}),!this.centerColumns){this.centerColumns=this.columnRefs.filter(function(c){return!c.frozen});var frozenColumns=this.columnRefs.filter(function(c){return c.frozen});frozenColumns.length&&("left"==this.frozenAlign?this.leftColumns=frozenColumns:this.rightColumns=frozenColumns)}this.allColumns.forEach(function(c){return c.grid=_this}),this.initColumnSort()
   }
  getColumnLayout(group: GridColumnGroupComponent): any[] { 
    for(var _this=this,aa=[],count=this.getColumnCount(group),i=0;i<group.rows.length;i++)aa[i]=new Array(count);return group.rows.forEach(function(row,rowIndex){row.columns.forEach(function(col){var colIndex=_this.getColumnIndex(aa[rowIndex]);if(colIndex>=0)for(var c=0;c<col.colspan;c++)for(var r=0;r<col.rowspan;r++)aa[rowIndex+r][colIndex]=col||""})}),aa
  }
  private getColumnCount = (group) => {
    var count=0;return group.rows.first.columns.forEach(function(col){count+=+col.colspan}),count
  };
  private getColumnIndex = (a) => {
    for(var i=0;i<a.length;i++)if(void 0==a[i])return i;return-1
  };
  onBodyScroll(event: any): void { 
    var top=event?event.top:this.view2.scrollTop;this.view1&&(this.view1.scrollTop=top),this.view3&&(this.view3.scrollTop=top)
  }
  addSort(col: GridColumnComponent): void { 
    for(var index=-1,i=0;i<this.sorts.length;i++)if(this.sorts[i].field==col.field){index=i;break}if(index>=0){var nextOrder="asc"==this.sorts[index].order?"desc":"asc";this.multiSort&&nextOrder==col.order?this.sorts.splice(index,1):this.sorts[index].order=nextOrder}else this.multiSort?this.sorts.push({field:col.field,order:col.order}):this.sorts=[{field:col.field,order:col.order}];this.initColumnSort()
  }
  initColumnSort(): void { 
    this.sorts=this.sorts||[],this.sorts instanceof Array||(this.sorts=[this.sorts]),this.multiSort||(this.sorts=this.sorts.slice(0,1));for(var c=0;c<this.allColumns.length;c++){var col=this.allColumns[c];col.currOrder=null;for(var s=0;s<this.sorts.length;s++){var sort=this.sorts[s];if(sort.field==col.field){col.currOrder=sort.order;break}}}
  }
  findColumn(field: string): GridColumnComponent { 
    for(var cc=this.allColumns,i=0;i<cc.length;i++)if(cc[i].field==field)return cc[i];return null
  }
  addFilterRule(rule: any): void { 
    // _super.prototype.addFilterRule.call(this,rule);
    super.addFilterRule(rule);

    var col=this.findColumn(rule.field);col&&(col._filterValue=rule.value,col.filterOperator=rule.op)
  }
  isEditing(row: any, column?: any): boolean { 
    if(void 0===column&&(column=null),this.editMode&&this.editingItem){if("cell"==this.editMode&&this.editingItem.column!=column)return!1;if(this.idField){if(this.editingItem.row[this.idField]==row[this.idField])return!0}else if(this.editingItem.row==row)return!0}return!1
  }
  beginEdit(row: any, column?: any, rowEl?: any): void { 
    var _this=this;if(void 0===column&&(column=null),void 0===rowEl&&(rowEl=null),!this.isEditing(row,column)){if(this.endEdit(),this.editingItem)return void setTimeout(function(){"row"==_this.editMode?_this.selectRow(_this.editingItem.row):"cell"==_this.editMode&&_this.selectCell(_this.editingItem.row,_this.editingItem.column)});var originalValue="row"==this.editMode?Object.assign({},row):row[column.field];this.editingItem={row:row,column:column,originalValue:originalValue,element:rowEl},this.editBegin.emit(this.editingItem)}
  }
  endEdit(): void { 
    if(this.editingItem){var el=this.editingItem.element;if(el&&el.querySelector(".validatebox-invalid"))return;this.editEnd.emit(this.editingItem),this.editingItem=null}
  }
  cancelEdit(): void { 
    this.editingItem&&("cell"==this.editMode?this.editingItem.row[this.editingItem.column.field]=this.editingItem.originalValue:Object.assign(this.editingItem.row,this.editingItem.originalValue),this.editCancel.emit(this.editingItem),this.editingItem=null)
  }

}
