import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateBaseModule } from './template-base';

import { ListBaseComponent } from './list-base/list-base.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListBaseComponent,
    VirtualScrollComponent,
  ],
  exports: [
    ListBaseComponent,
    VirtualScrollComponent,

    TemplateBaseModule,
  ]
})
export class BaseModule { }
