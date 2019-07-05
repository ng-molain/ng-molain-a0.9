import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SharedComponentsModule } from './components';
import { NgMolainCommonModule } from '@ng-molain/common';
import { NgMolainComponentsModule } from '@ng-molain/components';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    SharedComponentsModule,
    NgMolainCommonModule,
    NgMolainComponentsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    SharedComponentsModule,
    NgMolainCommonModule,
    NgMolainComponentsModule,
  ]
})
export class SharedModule { }
