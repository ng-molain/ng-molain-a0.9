import { Directive, OnInit, OnDestroy, TemplateRef, EmbeddedViewRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[mlGridFilter], [mlGridFilterTemplate]'
})
export class GridFilterDirective implements OnInit, OnDestroy {

  // viewContainer: ViewContainerRef;
  @Input() column: any;
  // @Input("mlGridFilter") 
  @Input("mlGridFilterTemplate") 
  template: TemplateRef<any>;
  
  view: EmbeddedViewRef<any>;
  
  constructor(public viewContainer: ViewContainerRef) {

  }

  ngOnInit(): void {
    this.view=this.viewContainer.createEmbeddedView(this.template,{$implicit:this.column})
  }

  ngOnDestroy(): void {
    this.view.destroy()
  }

}
