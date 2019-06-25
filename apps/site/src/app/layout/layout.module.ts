import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from './header/header.component';
import { LayoutDefaultComponent } from './default/default.component';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  declarations: [
    LayoutHeaderComponent,
    LayoutDefaultComponent,
  ],
  exports: [
    LayoutHeaderComponent,
    LayoutDefaultComponent,
  ]
})
export class LayoutModule { }
