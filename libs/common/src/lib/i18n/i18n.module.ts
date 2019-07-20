import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from './translate/index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    TranslateModule
  ]
})
export class I18nModule { }
