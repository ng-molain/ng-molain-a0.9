import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsDemoComponent } from './details-demo/details-demo.component';

const routes: Routes = [
  { path: '', component: DetailsDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsDemoRoutingModule { }
