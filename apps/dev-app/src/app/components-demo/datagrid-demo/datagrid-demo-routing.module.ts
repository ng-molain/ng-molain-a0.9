import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatagridDemoComponent } from './datagrid-demo/datagrid-demo.component';
import { DatagridBasicDemoComponent } from './datagrid-basic-demo/datagrid-basic-demo.component';

const routes: Routes = [
  {
    path: '', component: DatagridDemoComponent, children: [
      { path: '', redirectTo: 'basic', pathMatch: 'full' },
      { path: 'basic', component: DatagridBasicDemoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatagridDemoRoutingModule { }
