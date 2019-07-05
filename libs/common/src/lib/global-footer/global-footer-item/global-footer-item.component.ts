import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, ElementRef, Input } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd';

@Component({
  selector: 'ml-global-footer-item',
  templateUrl: './global-footer-item.component.html',
  styleUrls: ['./global-footer-item.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class GlobalFooterItemComponent {
  @ViewChild('host', { static: true }) host: ElementRef;

  @Input() href: string;
  @Input() @InputBoolean() blankTarget: boolean;

}
