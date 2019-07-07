import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsDemoRoutingModule } from './details-demo-routing.module';
import { DetailsDemoComponent } from './details-demo/details-demo.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DetailsDemoRoutingModule
  ],
  declarations: [DetailsDemoComponent],
})
export class DetailsDemoModule { }
