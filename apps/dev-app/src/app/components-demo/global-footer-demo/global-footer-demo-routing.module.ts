import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalFooterDemoComponent } from './global-footer-demo/global-footer-demo.component';

const routes: Routes = [
  { path: '', component: GlobalFooterDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalFooterDemoRoutingModule { }
