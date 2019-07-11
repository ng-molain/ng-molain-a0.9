import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';

import { SidenavComponent } from './sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NzMenuModule,
  ],
  declarations: [SidenavComponent],
  exports: [SidenavComponent]
})
export class SidenavModule { }
