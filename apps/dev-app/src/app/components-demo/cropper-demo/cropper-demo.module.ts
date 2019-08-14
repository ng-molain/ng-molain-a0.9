import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';

import { CropperDemoRoutingModule } from './cropper-demo-routing.module';
import { CropperDemoComponent } from './cropper-demo/cropper-demo.component';

@NgModule({
  imports: [
    SharedModule,
    CropperDemoRoutingModule
  ],
  declarations: [
    CropperDemoComponent,
  ],
})
export class CropperDemoModule { }
