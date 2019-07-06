import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared';
import { ResultDemoRoutingModule } from './result-demo-routing.module';
import { ResultDemoComponent } from './result-demo/result-demo.component';
import { ResultSimpleDemoComponent } from './result-simple-demo/result-simple-demo.component';
import { ResultFailDemoComponent } from './result-fail-demo/result-fail-demo.component';
import { ResultStructureDemoComponent } from './result-structure-demo/result-structure-demo.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ResultDemoRoutingModule
  ],
  declarations: [
    ResultDemoComponent,
    ResultSimpleDemoComponent,
    ResultFailDemoComponent,
    ResultStructureDemoComponent,
  ],
})
export class ResultDemoModule { }
