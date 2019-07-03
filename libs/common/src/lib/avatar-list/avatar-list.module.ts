import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { AvatarListComponent } from './avatar-list.component';
import { AvatarListItemComponent } from './avatar-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    NzAvatarModule,
    NzToolTipModule,
  ],
  declarations: [AvatarListComponent, AvatarListItemComponent],
  exports: [AvatarListComponent, AvatarListItemComponent]
})
export class AvatarListModule { }
