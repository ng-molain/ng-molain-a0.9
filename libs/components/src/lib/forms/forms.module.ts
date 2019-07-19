import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormItemComponent } from './form-item/form-item.component';
import { FieldsetComponent } from './fieldset/fieldset.component';

@NgModule({
  declarations: [FormItemComponent, FieldsetComponent],
  imports: [
    CommonModule
  ],
  exports: [FormItemComponent, FieldsetComponent]
})
export class FormsModule { }
