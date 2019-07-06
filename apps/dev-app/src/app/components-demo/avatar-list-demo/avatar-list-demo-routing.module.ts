import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvatarListDemoComponent } from './avatar-list-demo/avatar-list-demo.component';

const routes: Routes = [
  { path: '', component: AvatarListDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvatarListDemoRoutingModule { }
