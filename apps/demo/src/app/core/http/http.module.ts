import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultHttpInterceptor } from './interceptors/default.interceptor';

@NgModule({
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: DefaultHttpInterceptor, multi: true}
  ]
})
export class HttpModule { }
