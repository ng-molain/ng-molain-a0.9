import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { NzButtonModule, NzSelectModule, NzInputModule, NzIconModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzSelectModule,
    NzInputModule,
    NzIconModule,
  ],
  declarations: [PaginationComponent],
  exports: [PaginationComponent]
})
export class PaginationModule { }
