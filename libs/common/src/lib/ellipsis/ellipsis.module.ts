import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisComponent } from './ellipsis.component';
import { ObserversModule } from '@angular/cdk/observers';
import { NzToolTipModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    ObserversModule,
    NzToolTipModule,
  ],
  declarations: [EllipsisComponent],
  exports: [EllipsisComponent],
})
export class EllipsisModule { }
