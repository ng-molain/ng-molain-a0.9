import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from '@ng-molain/demo/shared';
import { AnalysisComponent } from './analysis/analysis.component';
import { MonitorComponent } from './monitor/monitor.component';
import { WorkplaceComponent } from './workplace/workplace.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [WelcomeComponent, AnalysisComponent, MonitorComponent, WorkplaceComponent],
})
export class DashboardModule { }
