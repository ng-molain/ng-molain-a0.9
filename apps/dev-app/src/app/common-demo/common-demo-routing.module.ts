import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'avatar-list', loadChildren: () => import('./avatar-list-demo/avatar-list-demo.module').then(m => m.AvatarListDemoModule) },
  { path: 'count-down', loadChildren: () => import('./count-down-demo/count-down-demo.module').then(m => m.CountDownDemoModule) },
  { path: 'down-file', loadChildren: () => import('./down-file-demo/down-file-demo.module').then(m => m.DownFileDemoModule) },
  { path: 'ellipsis', loadChildren: () => import('./ellipsis-demo/ellipsis-demo.module').then(m => m.EllipsisDemoModule) },

  { path: 'exception', loadChildren: () => import('./exception-demo/exception-demo.module').then(m => m.ExceptionDemoModule) },
  { path: 'toolbar', loadChildren: () => import('./toolbar-demo/toolbar-demo.module').then(m => m.ToolbarDemoModule) },
  { path: 'full-content', loadChildren: () => import('./full-content-demo/full-content-demo.module').then(m => m.FullContentDemoModule) },
  // { path: '', loadChildren: () => import('.').then(m => m) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonDemoRoutingModule { }
