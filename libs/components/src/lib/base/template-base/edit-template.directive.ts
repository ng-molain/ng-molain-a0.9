import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[mlEditTemplate]'
})
export class EditTemplateDirective {

  constructor(public template: TemplateRef<any>) { }

}
