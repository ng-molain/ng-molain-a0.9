import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { HttpClientModule } from '@angular/common/http';
import { I18nModule } from './i18n';
import { HttpModule } from './http/http.module';
import { StartupModule } from './startup';

@NgModule({
  providers: [],
  exports: [
    HttpClientModule,
    HttpModule,
    I18nModule,
    StartupModule,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
