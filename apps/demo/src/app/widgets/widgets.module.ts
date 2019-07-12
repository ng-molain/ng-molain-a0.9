import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { WidgetsComponent } from './widgets/widgets.component';
import { SharedModule } from '@ng-molain/demo/shared';

@NgModule({
  imports: [
    SharedModule,
    WidgetsRoutingModule
  ],
  declarations: [WidgetsComponent],
})
export class WidgetsModule { }
