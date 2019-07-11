import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { G2RadarComponent } from './radar.component';
import { NgMolainCommonModule } from '@ng-molain/common';

const COMPONENTS = [G2RadarComponent];

@NgModule({
  imports: [CommonModule, NzGridModule, NgMolainCommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2RadarModule {}
