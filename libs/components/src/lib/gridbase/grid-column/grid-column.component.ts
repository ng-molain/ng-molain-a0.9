import { Component, OnInit, AfterViewInit, ContentChild, Input } from '@angular/core';
import { HeaderTemplateDirective, CellTemplateDirective, EditTemplateDirective, FooterTemplateDirective, FilterTemplateDirective } from '../../base/template-base';
import { domHelper } from '../../base';

@Component({
  selector: 'ml-grid-column',
  templateUrl: './grid-column.component.html',
  styleUrls: ['./grid-column.component.scss']
})
export class GridColumnComponent implements OnInit, AfterViewInit {

  @ContentChild(HeaderTemplateDirective, {static: false})
  headerTemplate: HeaderTemplateDirective;
  @ContentChild(CellTemplateDirective, {static: false})
  cellTemplate: CellTemplateDirective;
  @ContentChild(EditTemplateDirective, {static: false})
  editTemplate: EditTemplateDirective;
  @ContentChild(FooterTemplateDirective, {static: false})
  footerTemplate: FooterTemplateDirective;
  @ContentChild(FilterTemplateDirective, {static: false})
  filterTemplate: FilterTemplateDirective;

  @Input() field: string;
  @Input() title: string;
  @Input() width: any;
  @Input() rowspan: number;
  @Input() colspan: number;
  @Input() sortable: boolean;
  @Input() editable: boolean;
  @Input() order: string;
  @Input() frozen: boolean;
  @Input() align: string;
  @Input() halign: string;
  @Input() sorter: Function;
  @Input() headerCls: string;
  @Input() headerStyle: Object;
  @Input() cellCss: any;
  @Input() expander: boolean;
  @Input() filterable: boolean;
  @Input() filterOperators: string[];

  currOrder: string;
  grid: any;
  _filterOperator: string;
  _filterValue: any;
  _isFiltering: boolean;
  _initialized: boolean;
  
  @Input()
  // filterOperator: string;
  get filterOperator(): string {
    return this._filterOperator
  }
  set filterOperator(value) {
    this._filterOperator=value
  }

  @Input()
  // filterValue: any;
  get filterValue(): any {
    return this._filterValue
  }
  set filterValue(value){
    var _this=this;this._filterValue=value,!this._isFiltering&&this._initialized&&(this._isFiltering=!0,setTimeout(function(){""==_this._filterValue||null==_this._filterValue?(_this.grid.removeFilterRule(_this.field),_this.grid.doFilter()):_this.filterOperator&&(_this.grid.addFilterRule({field:_this.field,op:_this.filterOperator,value:_this.filterValue}),_this.grid.doFilter()),_this._isFiltering=!1},this.grid.filterDelay))
  }

  constructor() {
    this.field=null;
    this.title=null;
    this.rowspan=1;
    this.colspan=1;
    this.sortable=!1;
    this.editable=!1;
    this.order="asc";
    this.frozen=!1;
    this.align=null;
    this.halign=null;
    this.sorter=null;
    this.headerCls=null;
    this.headerStyle=null;
    this.cellCss=null;
    this.expander=!1;
    this.filterable=!0;
    this.filterOperators=[];
    this.currOrder=null;
    this.grid=null;
    this._filterOperator="contains";
    this._filterValue=null;
    this._isFiltering=!1;
    this._initialized=!1;
  }

  ngOnInit(): void {
    this.width=domHelper.toStyleValue(this.width)
  }

  ngAfterViewInit(): void {
    var _this=this;setTimeout(function(){return _this._initialized=!0})
  }

}
