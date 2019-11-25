import { Directive, OnInit, OnDestroy, ViewContainerRef, TemplateRef, EmbeddedViewRef, Input } from '@angular/core';

@Directive({
  selector: '[mlGridHeader], [mlGridHeaderTemplate]'
})
export class GridHeaderDirective implements OnInit, OnDestroy{
  // viewContainer: ViewContainerRef;
  @Input() column: any;
  // @Input("mlGridHeader") 
  @Input("mlGridHeaderTemplate") 
  template: TemplateRef<any>;
  
  view: EmbeddedViewRef<any>;
  
  constructor(public viewContainer: ViewContainerRef){

  }

  ngOnInit(): void{
    this.view=this.viewContainer.createEmbeddedView(this.template,{$implicit:this.column})
  }

  ngOnDestroy(): void{
    this.view.destroy()
  }

}
