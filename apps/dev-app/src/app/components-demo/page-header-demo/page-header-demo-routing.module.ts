import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHeaderDemoComponent } from './page-header-demo/page-header-demo.component';

const routes: Routes = [
  { path: '', component: PageHeaderDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageHeaderDemoRoutingModule { }
