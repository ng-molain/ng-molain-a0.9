import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolbarDemoComponent } from './toolbar-demo/toolbar-demo.component';

const routes: Routes = [
  { path: '', component: ToolbarDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolbarDemoRoutingModule { }
