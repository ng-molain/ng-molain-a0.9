import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { HttpClientModule } from '@angular/common/http';
import { I18nModule } from './i18n';

@NgModule({
  providers: [],
  exports: [
    HttpClientModule,
    I18nModule,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
