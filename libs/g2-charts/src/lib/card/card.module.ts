import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { G2CardComponent } from './card.component';
import { NgMolainCommonModule } from '@ng-molain/common';

const COMPONENTS = [G2CardComponent];

@NgModule({
  imports: [CommonModule, NzCardModule, NzSpinModule, NgMolainCommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2CardModule {}
