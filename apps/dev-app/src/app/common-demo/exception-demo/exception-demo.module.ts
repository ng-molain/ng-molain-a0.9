import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExceptionDemoRoutingModule } from './exception-demo-routing.module';
import { ExceptionDemoComponent } from './exception-demo/exception-demo.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ExceptionDemoRoutingModule
  ],
  declarations: [ExceptionDemoComponent],
})
export class ExceptionDemoModule { }
