import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'avatar-list', loadChildren: () => import('./avatar-list-demo/avatar-list-demo.module').then(m => m.AvatarListDemoModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonDemoRoutingModule { }
