import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[mlDetailTemplate]'
})
export class DetailTemplateDirective {
  @Input() height: number;

  constructor(public template: TemplateRef<any>) { }

}
