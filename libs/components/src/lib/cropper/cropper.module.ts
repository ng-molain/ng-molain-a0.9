import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule, NzIconModule, NzInputModule } from 'ng-zorro-antd';

import { CropperComponent } from './cropper/cropper.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
  ],
  declarations: [
    CropperComponent,
  ],
  exports: [
    CropperComponent,
  ]
})
export class CropperModule { }
