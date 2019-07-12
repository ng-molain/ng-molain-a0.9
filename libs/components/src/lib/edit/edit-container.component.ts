import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { SEConfig } from './edit.config';
import { InputNumber, InputBoolean } from 'ng-zorro-antd';

export type REP_TYPE = 1 | 2 | 3 | 4 | 5 | 6;

function toNumber(val) {
  return +val;
}

@Component({
  selector: 'se-container, [se-container], ml-se-container, [ml-se-container]',
  exportAs: 'seContainer',
  templateUrl: './edit-container.component.html',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SEContainerComponent {
  // #region fields

  @Input('se-container') @InputNumber() colInCon: REP_TYPE;
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

  constructor(cog: SEConfig) {
    Object.assign(this, { ...new SEConfig(), ...cog });
  }
}
