import { Directive, ViewContainerRef, OnInit, OnDestroy, TemplateRef, EmbeddedViewRef, Input } from '@angular/core';

@Directive({
  selector: '[mlDatagridDetail], [mlDataGridDetailTemplate]'
})
export class DatagridDetailDirective implements OnInit, OnDestroy {

  @Input()
  row: any;
  @Input()
  rowIndex: number;
  // @Input('mlDatagridDetail')
  @Input('mlDataGridDetailTemplate')
  template: TemplateRef<any>;
  
  view: EmbeddedViewRef<any>;

  constructor(public viewContainer: ViewContainerRef) { }

  ngOnInit() {
    this.view=this.viewContainer.createEmbeddedView(this.template,{$implicit:this.row,rowIndex:this.rowIndex});
  }

  ngOnDestroy() {
    this.view.destroy();
  }
}
