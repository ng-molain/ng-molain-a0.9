import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd';

import { DetailsComponent } from './details.component';
import { DetailItemComponent } from './detail-item/detail-item.component';

@NgModule({
  imports: [
    CommonModule,
    NzGridModule,
  ],
  declarations: [DetailsComponent, DetailItemComponent],
  exports: [DetailsComponent, DetailItemComponent]
})
export class DetailsModule { }
