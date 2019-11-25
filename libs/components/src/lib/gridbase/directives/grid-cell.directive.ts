import { Directive, OnInit, OnDestroy, TemplateRef, EmbeddedViewRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[mlGridCell], [mlGridCellTemplate]'
})
export class GridCellDirective implements OnInit, OnDestroy {

  // viewContainer: ViewContainerRef;
  @Input() row: any;
  @Input() rowIndex: number;
  @Input() column: any;
  // @Input("mlGridCell") 
  @Input("mlGridCellTemplate") 
  template: TemplateRef<any>;

  view: EmbeddedViewRef<any>;

  constructor(public viewContainer: ViewContainerRef) { }
  
  ngOnInit(): void {
    this.view=this.viewContainer.createEmbeddedView(this.template,{$implicit:this.row,rowIndex:this.rowIndex,column:this.column})
  }
  
  ngOnDestroy(): void {
    this.view.destroy()
  }

}
