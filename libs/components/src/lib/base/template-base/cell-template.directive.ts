import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[mlCellTemplate]'
})
export class CellTemplateDirective {

  constructor(public template: TemplateRef<any>) { }

}
