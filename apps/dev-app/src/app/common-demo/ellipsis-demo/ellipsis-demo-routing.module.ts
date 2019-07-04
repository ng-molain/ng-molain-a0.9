import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EllipsisDemoComponent } from './ellipsis-demo/ellipsis-demo.component';

const routes: Routes = [
  { path: '', component: EllipsisDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EllipsisDemoRoutingModule { }
