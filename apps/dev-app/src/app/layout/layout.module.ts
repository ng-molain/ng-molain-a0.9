import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';
import { HeaderComponent } from './header/header.component';
import { LayoutDefaultComponent } from './default/default.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    LayoutDefaultComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  exports: [
    HeaderComponent,
    LayoutDefaultComponent,
    NotFoundComponent,
    HomeComponent,
  ],
})
export class LayoutModule { }
