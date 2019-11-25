import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[mlGroupTemplate]'
})
export class GroupTemplateDirective {
  @Input() groupCls: any;
  @Input() groupStyle: any;

  constructor(public template: TemplateRef<any>) { }

}
