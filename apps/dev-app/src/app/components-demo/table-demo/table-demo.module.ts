import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableDemoRoutingModule } from './table-demo-routing.module';
import { SimpleTableDemoComponent } from './simple-table-demo/simple-table-demo.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    TableDemoRoutingModule,
    SharedModule,
  ],
  declarations: [SimpleTableDemoComponent],
})
export class TableDemoModule { }
