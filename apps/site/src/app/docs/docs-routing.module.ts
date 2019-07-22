import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocsHomeComponent } from './docs-home/docs-home.component';
import { DocsViewComponent } from './docs-view/docs-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'guides/getting-started', pathMatch: 'full' },
  // { path: 'guides', redirectTo: 'guides/getting-started', pathMatch: 'full' },
  {
    path: ':type', component: DocsHomeComponent, children: [
      {path: '', children: [
        { path: ':slogan', component: DocsViewComponent }
      ]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
