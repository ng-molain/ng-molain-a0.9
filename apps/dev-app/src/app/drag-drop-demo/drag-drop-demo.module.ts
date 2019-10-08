import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropDemoRoutingModule } from './drag-drop-demo-routing.module';
import { ResizableDemoComponent } from './resizable-demo/resizable-demo.component';
import { SharedModule } from '../shared';
import { NgMolainDragDropModule, GridLayoutModule as NgMolainGridLayoutModule } from '@ng-molain/drag-drop';
import { AutoGridLayoutDemoComponent } from './auto-grid-layout-demo/auto-grid-layout-demo.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgMolainDragDropModule,
    NgMolainGridLayoutModule,
    DragDropDemoRoutingModule
  ],
  declarations: [
    ResizableDemoComponent,
    AutoGridLayoutDemoComponent,
  ],
})
export class DragDropDemoModule { }
