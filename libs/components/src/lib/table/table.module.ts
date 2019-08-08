import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { NzIconModule, NzEmptyModule, NzSpinModule, NzCheckboxModule, NzTagModule, NzBadgeModule } from 'ng-zorro-antd';
import { PaginationModule } from '../pagination';
import { CellComponent } from './simple-table/cell/cell.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule,
    NzIconModule,
    NzEmptyModule,
    NzSpinModule,
    NzCheckboxModule,
    NzTagModule,
    NzBadgeModule,
  ],
  declarations: [SimpleTableComponent, CellComponent],
  exports: [SimpleTableComponent]
})
export class TableModule { }
