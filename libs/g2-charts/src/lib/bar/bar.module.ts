import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { G2BarComponent } from './bar.component';
import { NgMolainCommonModule } from '@ng-molain/common';

const COMPONENTS = [G2BarComponent];

@NgModule({
  imports: [CommonModule, NgMolainCommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2BarModule { }
