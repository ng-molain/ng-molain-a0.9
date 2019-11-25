import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatagridDemoRoutingModule } from './datagrid-demo-routing.module';
import { DatagridDemoComponent } from './datagrid-demo/datagrid-demo.component';
import { DatagridBasicDemoComponent } from './datagrid-basic-demo/datagrid-basic-demo.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    DatagridDemoRoutingModule,
    SharedModule
  ],
  declarations: [
    DatagridDemoComponent,
    DatagridBasicDemoComponent,
  ],
})
export class DatagridDemoModule { }
