import { Component, OnInit, OnChanges, AfterContentInit, AfterViewInit, OnDestroy, ContentChild, ViewChild, ElementRef, Input, TemplateRef, Optional, Host, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgModel, FormControlName } from '@angular/forms';
import { InputBoolean, InputNumber } from 'ng-zorro-antd';
import { deepGet, isEmptyElement } from '@ng-molain/common';
import { SimpleFormComponent } from '../simple-form/simple-form.component';

const prefixCls = `se`;
let nextUniqueId = 0;

@Component({
  selector: 'ml-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[style.padding-left.px]': 'paddingValue',
    '[style.padding-right.px]': 'paddingValue',
    '[class.ant-form-item-with-help]': 'showErr',
  },
  preserveWhitespaces: false,
  // changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FormItemComponent implements OnChanges, AfterContentInit, AfterViewInit, OnDestroy {
  private el: HTMLElement;
  private status$: Subscription;
  @ContentChild(NgModel) private readonly ngModel: NgModel;
  @ContentChild(FormControlName) private readonly formControlName: FormControlName;
  @ViewChild('contentElement', { static: true }) private readonly contentElement: ElementRef;
  private clsMap: string[] = [];
  private inited = false;
  private onceFlag = false;
  invalid = false;
  _labelWidth: number | null = null;

  // #region fields

  @Input() optional: string;
  @Input() optionalHelp: string;
  @Input() error: string;
  @Input() extra: string;
  @Input() label: string | TemplateRef<void>;
  @Input() @InputNumber() col: number;
  @Input() @InputBoolean() required = false;
  @Input() controlClass: string = '';
  @Input() @InputBoolean() line: boolean;
  @Input() @InputNumber() labelWidth: number;

  @Input()
  set id(value: string) {
    this._id = value;
    this._autoId = false;
  }

  _id = `_se-${nextUniqueId++}`;
  _autoId = true;

  // #endregion

  get paddingValue(): number {
    return this.parent.gutter / 2;
  }

  get showErr(): boolean {
    return this.invalid && this.parent.size !== 'compact' && !!this.error;
  }

  private get ngControl(): NgModel | FormControlName {
    return this.ngModel || this.formControlName;
  }

  constructor(
    el: ElementRef,
    @Optional() @Host() private parent: SimpleFormComponent,
    // private rep: ResponsiveService,
    private ren: Renderer2,
    private cdr: ChangeDetectorRef,
  ) {
    if (parent == null) {
      throw new Error(`[se] must include 'se-container' component`);
    }
    this.el = el.nativeElement;
  }

  private setClass(): this {
    // const { el, ren, clsMap, col, parent, cdr, line, labelWidth, rep } = this;
    const { el, ren, clsMap, col, parent, cdr, line, labelWidth } = this;
    this._labelWidth = labelWidth != null ? labelWidth : parent.labelWidth;
    clsMap.forEach(cls => ren.removeClass(el, cls));
    clsMap.length = 0;
    // const repCls =
    //   parent.nzLayout === 'horizontal' ? rep.genCls(col != null ? col : parent.colInCon || parent.col) : [];
    // clsMap.push(`ant-form-item`, ...repCls, `${prefixCls}__item`);
    clsMap.push(`ant-form-item`, `${prefixCls}__item`);
    if (line || parent.line) {
      clsMap.push(`${prefixCls}__line`);
    }
    clsMap.forEach(cls => ren.addClass(el, cls));
    cdr.detectChanges();
    return this;
  }

  private bindModel() {
    if (!this.ngControl || this.status$) return;

    // tslint:disable-next-line:no-non-null-assertion
    this.status$ = this.ngControl.statusChanges!.subscribe(res => this.updateStatus(res === 'INVALID'));

    if (this._autoId) {
      const control = deepGet(this.ngControl.valueAccessor, '_elementRef.nativeElement') as HTMLElement;
      if (control) {
        control.id = this._id;
      }
    }
  }

  private updateStatus(invalid: boolean): void {
    if (this.ngControl.disabled || this.ngControl.isDisabled) {
      return;
    }
    this.invalid = ((invalid && this.onceFlag) || (this.ngControl.dirty && invalid)) as boolean;
    this.cdr.detectChanges();
  }

  checkContent(): void {
    const el = this.contentElement.nativeElement;
    const cls = `${prefixCls}__item-empty`;
    if (isEmptyElement(el)) {
      this.ren.addClass(el, cls);
    } else {
      this.ren.removeClass(el, cls);
    }
  }

  ngAfterContentInit(): void {
    this.checkContent();
  }

  ngOnChanges() {
    this.onceFlag = this.parent.firstVisual;
    if (this.inited) this.setClass().bindModel();
  }

  ngAfterViewInit(): void {
    this.setClass().bindModel();
    this.inited = true;
    if (this.onceFlag) {
      Promise.resolve().then(() => {
        // tslint:disable-next-line:no-non-null-assertion
        this.updateStatus(this.ngControl.invalid!);
        this.onceFlag = false;
      });
    }
  }

  ngOnDestroy(): void {
    if (this.status$) {
      this.status$.unsubscribe();
    }
  }
}
