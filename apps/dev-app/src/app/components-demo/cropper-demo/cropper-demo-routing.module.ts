import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CropperDemoComponent } from './cropper-demo/cropper-demo.component';

const routes: Routes = [
  {path: '', component: CropperDemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CropperDemoRoutingModule { }
