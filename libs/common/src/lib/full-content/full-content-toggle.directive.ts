import { Directive, HostListener } from '@angular/core';
import { FullContentComponent } from './full-content.component';

@Directive({
  selector: '[mlFullContentToggle]'
})
export class FullContentToggleDirective {

  constructor(private _parent: FullContentComponent) { }

  @HostListener('click')
  _click() {
    this._parent.toggle();
  }
}
