import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[mlHeaderTemplate]'
})
export class HeaderTemplateDirective {

  constructor(public template: TemplateRef<any>) { }

}
