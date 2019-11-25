import { Directive, ViewContainerRef, OnInit, OnDestroy, TemplateRef, EmbeddedViewRef, Input } from '@angular/core';

@Directive({
  selector: '[mlDatagridGroup], [mlDataGridGroupTemplate]'
})
export class DatagridGroupDirective implements OnInit, OnDestroy {

  @Input()
  value: any;
  @Input()
  rows: any[];
  // @Input('mlDatagridGroup')
  @Input('mlDataGridGroupTemplate')
  template: TemplateRef<any>;

  view: EmbeddedViewRef<any>;

  constructor(public viewContainer: ViewContainerRef) { }

  ngOnInit() {
    this.view = this.viewContainer.createEmbeddedView(this.template, { $implicit: this.value, rows: this.rows });
  }

  ngOnDestroy() {
    this.view.destroy();
  }

}
