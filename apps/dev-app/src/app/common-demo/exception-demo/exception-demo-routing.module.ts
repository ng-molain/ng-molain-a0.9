import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExceptionDemoComponent } from './exception-demo/exception-demo.component';

const routes: Routes = [
  {path: '', component: ExceptionDemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExceptionDemoRoutingModule { }
