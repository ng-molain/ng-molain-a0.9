import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[mlPageTemplate]'
})
export class PageTemplateDirective {

  constructor(public template: TemplateRef<any>) { }

}
