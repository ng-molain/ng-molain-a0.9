import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/**
 * 用于应用启动时
 * 一般用来校验应用运行环境 和 获取应用所需要的基础配置和数据
 */
@Injectable()
export class StartupService {

  constructor(
    private http: HttpClient
  ) { }

  load(): Promise<any> {
    // return this.http.get('http://sparkdev.qimooc.net/api/open/siteInfo4').toPromise();
    return of(false).toPromise();
  }
}
