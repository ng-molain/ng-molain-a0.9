import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullContentComponent } from './full-content.component';
import { FullContentToggleDirective } from './full-content-toggle.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FullContentComponent, FullContentToggleDirective],
  exports: [FullContentComponent, FullContentToggleDirective]
})
export class FullContentModule { }
