import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicUsageDemoComponent } from './basic-usage-demo/basic-usage-demo.component';

const routes: Routes = [
  { path: '', component: BasicUsageDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CacheDemoRoutingModule { }
