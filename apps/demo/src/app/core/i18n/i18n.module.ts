import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData, LOCALE_PROVIDERS } from './vender-local-register';

registerLocaleData();

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ...LOCALE_PROVIDERS
  ]
})
export class I18nModule { }
