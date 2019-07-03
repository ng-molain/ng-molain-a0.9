import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SharedComponentsModule } from './components';
import { NgMolainCommonModule } from '@ng-molain/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    SharedComponentsModule,
    NgMolainCommonModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    SharedComponentsModule,
    NgMolainCommonModule,
  ]
})
export class SharedModule { }
