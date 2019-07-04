import { NgModule } from '@angular/core';
import { AvatarListModule } from './avatar-list';
import { CountDownModule } from './count-down';
import { DownFileModule } from './down-file';

@NgModule({
  exports: [
    AvatarListModule,
    CountDownModule,
    DownFileModule,
  ]
})
export class NgMolainCommonModule {}
