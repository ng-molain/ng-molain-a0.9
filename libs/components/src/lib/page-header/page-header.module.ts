import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzAffixModule, NzSkeletonModule, NzBreadCrumbModule } from 'ng-zorro-antd';

import { PageHeaderComponent } from './page-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NzAffixModule,
    NzSkeletonModule,
    NzBreadCrumbModule,
  ],
  declarations: [PageHeaderComponent],
  exports: [PageHeaderComponent]
})
export class PageHeaderModule { }
