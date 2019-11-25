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
  { path: 'global-footer', loadChildren: () => import('./global-footer-demo/global-footer-demo.module').then(m => m.GlobalFooterDemoModule) },
  { path: 'page-header', loadChildren: () => import('./page-header-demo/page-header-demo.module').then(m => m.PageHeaderDemoModule) },
  { path: 'result', loadChildren: () => import('./result-demo/result-demo.module').then(m => m.ResultDemoModule) },
  { path: 'details', loadChildren: () => import('./details-demo/details-demo.module').then(m => m.DetailsDemoModule) },
  { path: 'forms', loadChildren: () => import('./forms-demo/forms-demo.module').then(m => m.FormsDemoModule) },

  { path: 'pagination', loadChildren: () => import('./pagination-demo/pagination-demo.module').then(m => m.PaginationDemoModule) },
  { path: 'table', loadChildren: () => import('./table-demo/table-demo.module').then(m => m.TableDemoModule) },
  { path: 'cropper', loadChildren: () => import('./cropper-demo/cropper-demo.module').then(m => m.CropperDemoModule) },
  { path: 'datagrid', loadChildren: () => import('./datagrid-demo/datagrid-demo.module').then(m => m.DatagridDemoModule) },
  // { path: '', loadChildren: () => import('.').then(m => m) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsDemoRoutingModule { }
