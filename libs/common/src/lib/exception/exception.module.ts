import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExceptionComponent } from './exception.component';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NzButtonModule,
  ],
  declarations: [ExceptionComponent],
  exports: [ExceptionComponent]
})
export class ExceptionModule { }
