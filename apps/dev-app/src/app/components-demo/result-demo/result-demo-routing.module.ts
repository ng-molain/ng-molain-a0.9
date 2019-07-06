import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultDemoComponent } from './result-demo/result-demo.component';

const routes: Routes = [
  { path: '', component: ResultDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultDemoRoutingModule { }
