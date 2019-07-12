import { NgModule } from '@angular/core';

import { SharedModule } from '@ng-molain/demo/shared';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { WidgetsComponent } from './widgets/widgets.component';

@NgModule({
  imports: [
    SharedModule,
    WidgetsRoutingModule
  ],
  declarations: [WidgetsComponent],
})
export class WidgetsModule { }
