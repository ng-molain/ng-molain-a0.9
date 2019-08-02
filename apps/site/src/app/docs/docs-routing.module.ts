import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocsHomeComponent } from './docs-home/docs-home.component';
import { DocsViewComponent } from './docs-view/docs-view.component';
import { ComponentViewComponent } from './component-view/component-view.component';
import { ComponentOverviewComponent } from './component-view/component-overview/component-overview.component';
import { ComponentApiComponent } from './component-view/component-api/component-api.component';
import { ComponentExamplesComponent } from './component-view/component-examples/component-examples.component';

const routes: Routes = [
  { path: '', redirectTo: 'guides/getting-started', pathMatch: 'full' },
  // { path: 'guides', redirectTo: 'guides/getting-started', pathMatch: 'full' },
  {
    path: 'guides', component: DocsHomeComponent, children: [
      {
        path: '', children: [
          { path: ':slogan', component: DocsViewComponent }
        ]
      },
    ]
  },
  {
    path: ':type', component: DocsHomeComponent, children: [
      { path: 'guides/:slogan', component: DocsViewComponent },
      {
        path: ':slogan', component: ComponentViewComponent, children: [
          { path: '', redirectTo: 'overview', pathMatch: 'full' },
          { path: 'overview', component: ComponentOverviewComponent },
          { path: 'api', component: ComponentApiComponent },
          { path: 'examples', component: ComponentExamplesComponent },
          { path: '**', redirectTo: 'overview', pathMatch: 'full' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
