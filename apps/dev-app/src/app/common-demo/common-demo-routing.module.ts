import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'avatar-list', loadChildren: () => import('./avatar-list-demo/avatar-list-demo.module').then(m => m.AvatarListDemoModule) },
  { path: 'count-down', loadChildren: () => import('./count-down-demo/count-down-demo.module').then(m => m.CountDownDemoModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonDemoRoutingModule { }
