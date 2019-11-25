import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BaseModule } from '../base';
import { GridbaseModule } from '../gridbase';
import { DatagridComponent } from './datagrid/datagrid.component';
import { DatagridTableComponent } from './datagrid-table/datagrid-table.component';
import { DatagridBodyComponent } from './datagrid-body/datagrid-body.component';
import { DatagridViewComponent } from './datagrid-view/datagrid-view.component';
import { DatagridDetailDirective } from './directives/datagrid-detail.directive';
import { DatagridEditDirective } from './directives/datagrid-edit.directive';
import { DatagridGroupDirective } from './directives/datagrid-group.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseModule,
    GridbaseModule
  ],
  declarations: [
    DatagridComponent,
    DatagridTableComponent,
    DatagridBodyComponent,
    DatagridViewComponent,
    DatagridDetailDirective,
    DatagridEditDirective,
    DatagridGroupDirective,
  ],
  exports: [
    DatagridComponent,
    DatagridTableComponent,
    DatagridBodyComponent,
    DatagridViewComponent,
    DatagridDetailDirective,
    DatagridEditDirective,
    DatagridGroupDirective,
  ]
})
export class DatagridModule { }
