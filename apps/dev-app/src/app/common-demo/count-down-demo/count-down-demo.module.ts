import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountDownDemoRoutingModule } from './count-down-demo-routing.module';
import { CountDownDemoComponent } from './count-down-demo/count-down-demo.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    CountDownDemoRoutingModule,
    SharedModule,
  ],
  declarations: [CountDownDemoComponent],
})
export class CountDownDemoModule { }
