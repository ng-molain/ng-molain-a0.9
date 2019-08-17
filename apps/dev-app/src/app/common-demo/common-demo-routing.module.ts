import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'cache', loadChildren: () => import('./cache-demo/cache-demo.module').then(m => m.CacheDemoModule) },
  // { path: '', loadChildren: () => import('.').then(m => m) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonDemoRoutingModule { }
