import { NgModule } from '@angular/core';
import { AvatarListModule } from './avatar-list';
import { CountDownModule } from './count-down';
import { DownFileModule } from './down-file';
import { EllipsisModule } from './ellipsis';

@NgModule({
  exports: [
    AvatarListModule,
    CountDownModule,
    DownFileModule,
    EllipsisModule,
  ]
})
export class NgMolainCommonModule {}
