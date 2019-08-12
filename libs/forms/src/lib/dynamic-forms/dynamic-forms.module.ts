import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormItemComponent } from './dynamic-form-item/dynamic-form-item.component';
import { DynamicFormOutletComponent } from './dynamic-form-outlet/dynamic-form-outlet.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ],
  declarations: [
    DynamicFormComponent,
    DynamicFormItemComponent,
    DynamicFormOutletComponent,
  ],
  exports: [
    DynamicFormComponent,
  ],
})
export class DynamicFormsModule { }
