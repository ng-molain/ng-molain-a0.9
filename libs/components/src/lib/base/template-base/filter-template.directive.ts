import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[mlFilterTemplate]'
})
export class FilterTemplateDirective {

  constructor(public template: TemplateRef<any>) { }

}
