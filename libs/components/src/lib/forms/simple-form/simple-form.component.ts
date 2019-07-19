import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import extend from 'extend';
import { SimpleFormDirective } from '../directives/simple-form.directive';
import { SimpleFormConfig } from '../simple-form.config';

@Component({
  selector: 'ml-simple-form, ml-form, [mlForm]',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss'],
  preserveWhitespaces: false,
  // changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SimpleFormComponent extends SimpleFormDirective {

  constructor(cog: SimpleFormConfig) {
    super(cog);
    Object.assign(this, { ...new SimpleFormConfig(), ...cog });
  }

}
