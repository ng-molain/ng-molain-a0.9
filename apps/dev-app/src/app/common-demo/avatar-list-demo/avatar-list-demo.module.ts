import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarListDemoRoutingModule } from './avatar-list-demo-routing.module';
import { AvatarListDemoComponent } from './avatar-list-demo/avatar-list-demo.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AvatarListDemoRoutingModule,
  ],
  declarations: [AvatarListDemoComponent],
})
export class AvatarListDemoModule { }
