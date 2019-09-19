import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropDemoRoutingModule } from './drag-drop-demo-routing.module';
import { ResizableDemoComponent } from './resizable-demo/resizable-demo.component';
import { SharedModule } from '../shared';
import { NgMolainDragDropModule } from '@ng-molain/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgMolainDragDropModule,
    DragDropDemoRoutingModule
  ],
  declarations: [
    ResizableDemoComponent,
  ],
})
export class DragDropDemoModule { }
