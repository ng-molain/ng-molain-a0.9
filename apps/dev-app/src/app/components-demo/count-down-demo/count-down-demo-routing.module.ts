import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountDownDemoComponent } from './count-down-demo/count-down-demo.component';

const routes: Routes = [
  { path: '', component: CountDownDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountDownDemoRoutingModule { }
