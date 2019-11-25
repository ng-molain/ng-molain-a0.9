import { Directive, OnInit, OnDestroy, TemplateRef, EmbeddedViewRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[mlDatagridEdit], [mlDataGridEditTemplate]'
})
export class DatagridEditDirective implements OnInit, OnDestroy {

  @Input()
  column: any;
  @Input()
  row: any;
  @Input()
  rowIndex: number;
  // @Input('mlDatagridEdit')
  @Input('mlDataGridEditTemplate')
  template: TemplateRef<any>;
  
  view: EmbeddedViewRef<any>;

  constructor(public viewContainer: ViewContainerRef) { }

  ngOnInit() {
    this.view=this.viewContainer.createEmbeddedView(this.template,{$implicit:this.column,row:this.row,rowIndex:this.rowIndex});
  }

  ngOnDestroy() {
    this.view.destroy();
  }

}
