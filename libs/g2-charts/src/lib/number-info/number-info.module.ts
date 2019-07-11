import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NumberInfoComponent } from './number-info.component';
import { NgMolainCommonModule } from '@ng-molain/common';

const COMPONENTS = [NumberInfoComponent];

@NgModule({
  imports: [CommonModule, NzIconModule, NgMolainCommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NumberInfoModule {}
