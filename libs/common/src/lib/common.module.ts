import { NgModule } from '@angular/core';
import { AvatarListModule } from './avatar-list';
import { CountDownModule } from './count-down';

@NgModule({
  exports: [
    AvatarListModule,
    CountDownModule,
  ]
})
export class NgMolainCommonModule {}
