import { Component, OnInit, HostBinding, ChangeDetectionStrategy, ViewEncapsulation, Input, ContentChildren, QueryList, Inject } from '@angular/core';
import { GlobalFooterLink } from './typings/global-footer-link';
import { GlobalFooterItemComponent } from './global-footer-item/global-footer-item.component';
import { Router } from '@angular/router';

@Component({
  selector: 'ml-global-footer',
  templateUrl: './global-footer.component.html',
  styleUrls: ['./global-footer.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class GlobalFooterComponent {

  @HostBinding('class.ml-global-footer') _bindStyleClass = true;

  @Input()
  links: GlobalFooterLink[] = [];

  @ContentChildren(GlobalFooterItemComponent)
  items!: QueryList<GlobalFooterItemComponent>;

  private win: Window = window;
  constructor(private router: Router, 
    // @Inject(WINDOW) private win: Window
  ) {}

  to(item: GlobalFooterLink) {
    if (!item.href) {
      return;
    }
    if (item.blankTarget) {
      this.win.open(item.href);
      return;
    }
    if (/^https?:\/\//.test(item.href)) {
      this.win.location.href = item.href;
    } else {
      this.router.navigateByUrl(item.href);
    }
  }
}
