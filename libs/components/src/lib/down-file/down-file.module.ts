import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownFileDirective } from './down-file.directive';

@NgModule({
  declarations: [DownFileDirective],
  imports: [
    CommonModule
  ],
  exports: [DownFileDirective]
})
export class DownFileModule { }
