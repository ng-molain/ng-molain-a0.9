import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationDemoRoutingModule } from './pagination-demo-routing.module';
import { PaginationDemoComponent } from './pagination-demo/pagination-demo.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    PaginationDemoRoutingModule,
    SharedModule,
  ],
  declarations: [PaginationDemoComponent],
})
export class PaginationDemoModule { }
