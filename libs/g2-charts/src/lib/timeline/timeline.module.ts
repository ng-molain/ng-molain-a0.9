import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { G2TimelineComponent } from './timeline.component';
import { NgMolainCommonModule } from '@ng-molain/common';

const COMPONENTS = [G2TimelineComponent];

@NgModule({
  imports: [CommonModule, NgMolainCommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2TimelineModule {}
