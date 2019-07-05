import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullContentDemoComponent } from './full-content-demo/full-content-demo.component';

const routes: Routes = [
  { path: '', component: FullContentDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullContentDemoRoutingModule { }
