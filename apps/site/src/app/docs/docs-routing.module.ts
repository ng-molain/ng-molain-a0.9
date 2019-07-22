import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocsHomeComponent } from './docs-home/docs-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'guides', pathMatch: 'full' },
  { path: ':type', component: DocsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
