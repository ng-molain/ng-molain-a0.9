import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[mlItemTemplate]'
})
export class ItemTemplateDirective {

  constructor(public template: TemplateRef<any>) { }

}
