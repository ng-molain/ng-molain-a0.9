import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemosLayoutComponent } from './layout/layout.component';
import { DemosHomeComponent } from './home/home.component';
import { NotFoundComponent } from '../layout';

const routes: Routes = [
  {
    path: '', component: DemosLayoutComponent, children: [
      { path: '', component: DemosHomeComponent },
      { path: 'common', loadChildren: () => import('../common-demo/common-demo.module').then(m => m.CommonDemoModule) },
      { path: 'components', loadChildren: () => import('../components-demo/components-demo.module').then(m => m.ComponentsDemoModule) },
      { path: 'drag-drop', loadChildren: () => import('../drag-drop-demo/drag-drop-demo.module').then(m => m.DragDropDemoModule) },
      { path: '**', component: NotFoundComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
