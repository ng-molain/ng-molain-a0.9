import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription, zip } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'demo-pro-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private http: HttpClient, private cdr: ChangeDetectorRef) {}
  private router$: Subscription;
  user: any;
  notice: any;
  tabs: any[] = [
    {
      key: 'articles',
      tab: '文章 (8)',
    },
    {
      key: 'applications',
      tab: '应用 (8)',
    },
    {
      key: 'projects',
      tab: '项目 (8)',
    },
  ];

  pos = 0;

  taging = false;
  tagValue = '';
  @ViewChild('tagInput', { static: false })
  private tagInput: ElementRef;

  private setActive() {
    const key = this.router.url.substr(this.router.url.lastIndexOf('/') + 1);
    const idx = this.tabs.findIndex(w => w.key === key);
    if (idx !== -1) this.pos = idx;
  }

  ngOnInit(): void {
    zip(this.http.get('/api/user/current'), this.http.get('/api/notice')).subscribe(([user, notice]) => {
      this.user = user;
      this.notice = notice;
      this.cdr.detectChanges();
    });
    this.router$ = this.router.events.pipe(filter(e => e instanceof ActivationEnd)).subscribe(() => this.setActive());
    this.setActive();
  }

  to(item: any) {
    this.router.navigateByUrl(`/pro/account/center/${item.key}`);
  }
  tagShowIpt() {
    this.taging = true;
    this.cdr.detectChanges();
    (this.tagInput.nativeElement as HTMLInputElement).focus();
  }

  tagBlur() {
    const { user, cdr, tagValue } = this;
    if (tagValue && user.tags.filter(tag => tag.label === tagValue).length === 0) {
      user.tags.push({ label: tagValue });
    }
    this.tagValue = '';
    this.taging = false;
    cdr.detectChanges();
  }

  tagEnter(e: KeyboardEvent) {
    // tslint:disable-next-line: deprecation
    if (e.keyCode === 13) this.tagBlur();
  }

  ngOnDestroy() {
    this.router$.unsubscribe();
  }
}
