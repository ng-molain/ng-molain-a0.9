import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, OnDestroy, Input, TemplateRef, ElementRef, Renderer2, Inject } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd';
import { DOCUMENT } from '@angular/common';

const CLSBODY = 'ml-toolbar__body';

@Component({
  selector: 'ml-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ToolbarComponent implements OnInit, OnDestroy {
  @Input() @InputBoolean() errorCollect = false;
  @Input() set extra(value: string | TemplateRef<void>) {
    if (!value) {
      this._extraStr = null;
      this._extraTpl = null;
      return;
    } 
    if (value instanceof TemplateRef) {
      this._extraStr = null;
      this._extraTpl = value;
    } else if (typeof value === 'string') {
      this._extraStr = value
    } else {
      this._extraStr = null;
      this._extraTpl = null;
    }
  }

  _extraStr: string;
  _extraTpl: TemplateRef<void>;

  constructor(private el: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private doc: any) {}

  private get bodyCls() {
    return this.doc.querySelector('body').classList;
  }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'ml-toolbar');
    this.bodyCls.add(CLSBODY);
  }

  ngOnDestroy() {
    this.bodyCls.remove(CLSBODY);
  }
}

