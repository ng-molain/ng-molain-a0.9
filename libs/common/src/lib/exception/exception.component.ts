import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Input, HostBinding, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { EXCEPTION_TYPES } from './exception-type';

export type ExceptionType = 403 | 404 | 500;

@Component({
  selector: 'ml-exception',
  templateUrl: './exception.component.html',
  styleUrls: ['./exception.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ExceptionComponent implements OnInit, OnDestroy {
  private i18n$: Subscription;
  @ViewChild('conTpl', { static: true }) private conTpl: ElementRef;

  _type: ExceptionType;
  // locale: LocaleData = {};
  hasCon = false;

  _img = '';
  _title = '';
  _desc = '';

  @Input()
  set type(value: ExceptionType) {
    const item = EXCEPTION_TYPES[value];

    if (!item) return;

    this._type = value;
    this._img = item.img;
    this._title = item.title;
    this._desc = item.desc;
  }

  @Input()
  set img(value: string) {
    this._img = value;
  }

  @Input()
  set title(value: string) {
    this._title = value;
  }

  @Input()
  set desc(value: string) {
    this._desc = value;
  }

  @HostBinding('class.ml-exception') _bindStyleClass = true;

  checkContent() {
    this.hasCon = !isEmpty(this.conTpl.nativeElement);
  }

  constructor(
    // private i18n: DelonLocaleService
  ) {}

  ngOnInit() {
    // this.i18n$ = this.i18n.change.subscribe(() => (this.locale = this.i18n.getData('exception')));
    this.checkContent();
  }

  ngOnDestroy() {
    // this.i18n$.unsubscribe();
  }
}

// TODO: 提取到公共的 Util 中
// export
function isEmpty(element: HTMLElement): boolean {
  const nodes = element.childNodes;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes.item(i);
    if (node.nodeType === 1 && (node as HTMLElement).outerHTML.toString().trim().length !== 0) {
      return false;
    } else if (node.nodeType === 3 && node.textContent!.toString().trim().length !== 0) {
      return false;
    }
  }
  return true;
}