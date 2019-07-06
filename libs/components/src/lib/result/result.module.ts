import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result.component';
import { NzIconModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NzIconModule,
  ],
  declarations: [ResultComponent],
  exports: [ResultComponent]
})
export class ResultModule { }
