import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownFileDemoRoutingModule } from './down-file-demo-routing.module';
import { DownFileDemoComponent } from './down-file-demo/down-file-demo.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DownFileDemoRoutingModule,
  ],
  declarations: [DownFileDemoComponent],
})
export class DownFileDemoModule { }
