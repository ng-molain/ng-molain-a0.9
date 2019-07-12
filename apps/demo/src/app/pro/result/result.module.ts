import { NgModule } from '@angular/core';

import { SharedModule } from '@ng-molain/demo/shared';

import { ResultRoutingModule } from './result-routing.module';
import { FailComponent } from './fail/fail.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  imports: [
    SharedModule,
    ResultRoutingModule
  ],
  declarations: [
    FailComponent,
    SuccessComponent,
  ],
})
export class ResultModule { }
