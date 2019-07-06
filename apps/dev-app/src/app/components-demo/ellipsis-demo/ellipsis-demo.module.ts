import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EllipsisDemoRoutingModule } from './ellipsis-demo-routing.module';
import { EllipsisDemoComponent } from './ellipsis-demo/ellipsis-demo.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EllipsisDemoRoutingModule
  ],
  declarations: [EllipsisDemoComponent],
})
export class EllipsisDemoModule { }
