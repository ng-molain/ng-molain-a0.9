import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { G2PieComponent } from './pie.component';
import { NgMolainCommonModule } from '@ng-molain/common';

const COMPONENTS = [G2PieComponent];

@NgModule({
  imports: [CommonModule, NzDividerModule, NgMolainCommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2PieModule {}
