import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarDemoRoutingModule } from './toolbar-demo-routing.module';
import { ToolbarDemoComponent } from './toolbar-demo/toolbar-demo.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ToolbarDemoRoutingModule
  ],
  declarations: [ToolbarDemoComponent],
})
export class ToolbarDemoModule { }
