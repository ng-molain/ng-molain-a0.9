import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResizableDemoComponent } from './resizable-demo/resizable-demo.component';
import { AutoGridLayoutDemoComponent } from './auto-grid-layout-demo/auto-grid-layout-demo.component';

const routes: Routes = [
  { path: 'resizable', component: ResizableDemoComponent },
  { path: 'autoGridLayout', component: AutoGridLayoutDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragDropDemoRoutingModule { }
