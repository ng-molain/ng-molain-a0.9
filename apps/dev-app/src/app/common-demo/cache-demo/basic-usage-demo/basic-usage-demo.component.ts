import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CacheService, LocalStorageCacheService, MemoryCacheService } from '@ng-molain/common';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'dev-basic-usage-demo',
  templateUrl: './basic-usage-demo.component.html',
  styleUrls: ['./basic-usage-demo.component.scss']
})
export class BasicUsageDemoComponent implements OnDestroy {
  value: any;
  key = 'demo';
  private notify$: Subscription;

  get newValue() {
    return +new Date();
  }

  constructor(public srv: CacheService, private msg: NzMessageService,
      public localCache: LocalStorageCacheService,
      public memoryCache: MemoryCacheService,
    ) { }

  getByHttp() {
    this.srv.get(`https://randomuser.me/api/?results=1`).subscribe(res => {
      console.log(res)
      this.value = res;
    });
  }

  removeHttp() {
    this.srv.remove(`https://randomuser.me/api/?results=1`);
  }

  registerNotify() {
    if (this.notify$) this.notify$.unsubscribe();
    this.notify$ = this.srv.notify(this.key).subscribe(res => {
      if (res == null) {
        this.msg.success('register success');
        return;
      }
      this.msg.warning(`"${this.key}" new status: ${res.type}`);
    });
  }

  unRegisterNotify() {
    this.srv.cancelNotify(this.key);
  }

  ngOnDestroy() {
    if (this.notify$) this.notify$.unsubscribe();
  }
}
