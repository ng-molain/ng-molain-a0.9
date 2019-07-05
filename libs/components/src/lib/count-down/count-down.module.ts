import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CountdownModule as NgxCountdownModule} from 'ngx-countdown';

import { CountDownComponent } from './count-down.component';

@NgModule({
  imports: [
    CommonModule,
    NgxCountdownModule,
  ],
  declarations: [CountDownComponent],
  exports: [CountDownComponent]
})
export class CountDownModule { }
