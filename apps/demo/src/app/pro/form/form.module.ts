import { NgModule } from '@angular/core';

import { SharedModule } from '@ng-molain/demo/shared';

import { FormRoutingModule } from './form-routing.module';
import { AdvancedFormComponent } from './advanced-form/advanced-form.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { StepFormComponent } from './step-form/step-form.component';
import { Step1Component } from './step-form/step1/step1.component';
import { Step2Component } from './step-form/step2/step2.component';
import { Step3Component } from './step-form/step3/step3.component';

@NgModule({
  imports: [
    SharedModule,
    FormRoutingModule
  ],
  declarations: [
    AdvancedFormComponent,
    BasicFormComponent,
    StepFormComponent,
    Step1Component,
    Step2Component,
    Step3Component,
  ],
})
export class FormModule { }
