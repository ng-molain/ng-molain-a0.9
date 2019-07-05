import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullContentDemoRoutingModule } from './full-content-demo-routing.module';
import { FullContentDemoComponent } from './full-content-demo/full-content-demo.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FullContentDemoRoutingModule
  ],
  declarations: [FullContentDemoComponent],
})
export class FullContentDemoModule { }
