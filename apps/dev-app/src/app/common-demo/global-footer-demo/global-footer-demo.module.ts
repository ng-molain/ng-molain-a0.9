import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalFooterDemoRoutingModule } from './global-footer-demo-routing.module';
import { GlobalFooterDemoComponent } from './global-footer-demo/global-footer-demo.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GlobalFooterDemoRoutingModule
  ],
  declarations: [GlobalFooterDemoComponent],
  exports: [GlobalFooterDemoComponent]
})
export class GlobalFooterDemoModule { }
