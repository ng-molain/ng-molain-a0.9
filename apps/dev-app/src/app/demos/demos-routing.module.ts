import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemosLayoutComponent } from './layout/layout.component';
import { DemosHomeComponent } from './home/home.component';
import { NotFoundComponent } from '../layout';

const routes: Routes = [
  {
    path: '', component: DemosLayoutComponent, children: [
      { path: '', component: DemosHomeComponent },
      
      { path: '**', component: NotFoundComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
