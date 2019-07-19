import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsDemoRoutingModule } from './forms-demo-routing.module';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { FormsBasicDemoComponent } from './forms-basic-demo/forms-basic-demo.component';
import { FormsCompactDemoComponent } from './forms-compact-demo/forms-compact-demo.component';
import { FormsComplexDemoComponent } from './forms-complex-demo/forms-complex-demo.component';
import { FormsHorizontalDemoComponent } from './forms-horizontal-demo/forms-horizontal-demo.component';
import { FormsInlineDemoComponent } from './forms-inline-demo/forms-inline-demo.component';
import { FormsLineDemoComponent } from './forms-line-demo/forms-line-demo.component';
import { FormsReactiveDemoComponent } from './forms-reactive-demo/forms-reactive-demo.component';
import { FormsVerticalDemoComponent } from './forms-vertical-demo/forms-vertical-demo.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsDemoRoutingModule
  ],
  declarations: [
    FormsDemoComponent,
    FormsBasicDemoComponent,
    FormsCompactDemoComponent,
    FormsComplexDemoComponent,
    FormsHorizontalDemoComponent,
    FormsInlineDemoComponent,
    FormsLineDemoComponent,
    FormsReactiveDemoComponent,
    FormsVerticalDemoComponent,
  ],
})
export class FormsDemoModule { }
