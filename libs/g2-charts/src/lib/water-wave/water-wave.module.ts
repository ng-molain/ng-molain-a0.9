import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { G2WaterWaveComponent } from './water-wave.component';
import { NgMolainCommonModule } from '@ng-molain/common';

const COMPONENTS = [G2WaterWaveComponent];

@NgModule({
  imports: [CommonModule, NgMolainCommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2WaterWaveModule { }
