import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormItemComponent } from './form-item/form-item.component';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { NzToolTipModule, NzIconModule } from 'ng-zorro-antd';
import { SimpleFormDirective } from './directives/simple-form.directive';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { NgMolainCommonModule } from '@ng-molain/common';

@NgModule({
  imports: [
    CommonModule,
    NzToolTipModule,
    NzIconModule,
    NgMolainCommonModule,
  ],
  declarations: [
    FormItemComponent,
    FieldsetComponent,
    SimpleFormDirective,
    SimpleFormComponent,
  ],
  exports: [
    FormItemComponent,
    FieldsetComponent,
    SimpleFormDirective,
    SimpleFormComponent,
  ]
})
export class NgMolainFormsModule { }
