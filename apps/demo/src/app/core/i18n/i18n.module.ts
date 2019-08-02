import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData, LOCALE_PROVIDERS } from './vender-local-register';
import { TranslateModule, TranslateLoader, HttpTranslateLoader } from '@ng-molain/common';
import { HttpClient } from '@angular/common/http';

registerLocaleData();

// AoT requires an exported function for factories
export function httpTranslateLoaderFactory(http: HttpClient) {
  return new HttpTranslateLoader(http, "/assets/tmp/i18n/", ".json");
}

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ...LOCALE_PROVIDERS,
  ]
})
export class I18nModule { }
