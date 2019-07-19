import { Directive, Input, TemplateRef } from '@angular/core';
import { InputNumber, toNumber, InputBoolean } from 'ng-zorro-antd';
import { SimpleFormConfig } from '../simple-form.config';

export type REP_TYPE = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * @deprecated Use Simple Form Component
 */
@Directive({
  selector: 'form[mlSimpleFormx], form[mlFormx]'
})
export class SimpleFormDirective {

  @Input('mlForm') @InputNumber() colInCon: REP_TYPE;
  @Input() @InputNumber() col: REP_TYPE;
  @Input() @InputNumber() labelWidth: number;
  @Input() title: string | TemplateRef<void>;

  @Input()
  get gutter(): number {
    return this.nzLayout === 'horizontal' ? this._gutter : 0;
  }
  set gutter(value: number) {
    this._gutter = toNumber(value);
  }
  private _gutter: number;

  @Input()
  get nzLayout() {
    return this._nzLayout;
  }
  set nzLayout(value: string) {
    this._nzLayout = value;
    if (value === 'inline') {
      this.size = 'compact';
    }
  }
  private _nzLayout: string;

  @Input() size: 'default' | 'compact';
  @Input() @InputBoolean() firstVisual: boolean;
  @Input() @InputBoolean() line = false;

  // #endregion

  constructor(cog: SimpleFormConfig) {
    Object.assign(this, { ...new SimpleFormConfig(), ...cog });
  }

}
