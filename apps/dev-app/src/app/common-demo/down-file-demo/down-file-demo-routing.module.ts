import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownFileDemoComponent } from './down-file-demo/down-file-demo.component';

const routes: Routes = [
  { path: '', component: DownFileDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownFileDemoRoutingModule { }
