import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { NzIconModule, NzEmptyModule, NzSpinModule } from 'ng-zorro-antd';
import { PaginationModule } from '../pagination';

@NgModule({
  imports: [
    CommonModule,
    PaginationModule,
    NzIconModule,
    NzEmptyModule,
    NzSpinModule,
  ],
  declarations: [SimpleTableComponent],
  exports: [SimpleTableComponent]
})
export class TableModule { }
