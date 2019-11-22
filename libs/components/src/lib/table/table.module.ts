import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { NzIconModule, NzEmptyModule, NzSpinModule, NzCheckboxModule, NzTagModule, NzBadgeModule } from 'ng-zorro-antd';
import { PaginationModule } from '../pagination/index';
import { CellComponent } from './simple-table/cell/cell.component';
import { ResizedModule } from '@ng-molain/drag-drop';

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
    ResizedModule,
  ],
  declarations: [SimpleTableComponent, CellComponent],
  exports: [SimpleTableComponent]
})
export class TableModule { }
