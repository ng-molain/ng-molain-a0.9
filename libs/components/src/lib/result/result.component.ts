import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input, TemplateRef, HostBinding } from '@angular/core';

@Component({
  selector: 'ml-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ResultComponent{
  _type = '';
  _icon = '';
  @Input()
  set type(value: string) {
    this._type = value;
    switch (value) {
      case 'success':
        this._icon = 'check-circle';
        break;
      case 'error':
        this._icon = 'close-circle';
        break;
      default:
        this._icon = value;
        break;
    }
  }

  titleStr: string;
  titleTpl: TemplateRef<void>;
  descriptionStr: string;
  descriptionTpl: TemplateRef<void>;
  extraStr: string;
  extraTpl: TemplateRef<void>;

  @Input() set title(value: string | TemplateRef<void>) {
    this.titleStr = null;
    this.titleTpl = null;
    if (value instanceof TemplateRef) {
      this.titleTpl = value;
    } else {
      this.titleStr = value;
    }
  }
  @Input() set description(value: string | TemplateRef<void>) {
    this.descriptionStr = null;
    this.descriptionTpl = null;
    if (value instanceof TemplateRef) {
      this.descriptionTpl = value;
    } else {
      this.descriptionStr = value;
    }
  }
  @Input() set extra(value: string | TemplateRef<void>) {
    this.extraStr = null;
    this.extraTpl = null;
    if (value instanceof TemplateRef) {
      this.extraTpl = value;
    } else {
      this.extraStr = value;
    }
  }

  @HostBinding('class.ml-result') _bindStyleClass = true;
}
