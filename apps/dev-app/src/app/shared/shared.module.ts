import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SharedComponentsModule } from './components';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    SharedComponentsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    SharedComponentsModule,
  ]
})
export class SharedModule { }
