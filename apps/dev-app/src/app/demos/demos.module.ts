import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { DemosHomeComponent } from './home/home.component';
import { DemosLayoutComponent } from './layout/layout.component';
import { DemosSidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from '../shared';
import { LayoutModule } from '../layout';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    DemosRoutingModule
  ],
  declarations: [
    DemosHomeComponent, 
    DemosLayoutComponent, 
    DemosSidenavComponent
  ],
})
export class DemosModule { }
