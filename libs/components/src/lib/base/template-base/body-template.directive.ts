import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[mlBodyTemplate]'
})
export class BodyTemplateDirective {

  constructor(public template: TemplateRef<any>) { }

}
