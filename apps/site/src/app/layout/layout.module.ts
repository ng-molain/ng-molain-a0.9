import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from './header/header.component';
import { LayoutDefaultComponent } from './default/default.component';

@NgModule({
  imports: [
    CommonModule
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
