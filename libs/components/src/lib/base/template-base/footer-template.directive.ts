import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[mlFooterTemplate]'
})
export class FooterTemplateDirective {

  constructor(public template: TemplateRef<any>) { }

}
