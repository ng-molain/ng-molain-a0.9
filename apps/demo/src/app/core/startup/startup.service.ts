import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { SystemInfoApiService } from '../data';
import { ApplicationContext } from '../services';

/**
 * 用于应用启动时
 * 一般用来校验应用运行环境 和 获取应用所需要的基础配置和数据
 */
@Injectable()
export class StartupService {

  constructor(
    private http: HttpClient,
    private systemInfoApi: SystemInfoApiService,
    private applicationContext: ApplicationContext,
  ) { }

  load(): Promise<any> {
    // return this.http.get('http://sparkdev.qimooc.net/api/open/siteInfo4').toPromise();
    // return of(false).toPromise();
    const appCtx = this.applicationContext;

    return this.systemInfoApi.getSystemInfo().pipe(
      tap(result => {
        appCtx.systemInfo = result;
        appCtx.markAsInited();
      }),
      catchError((error: HttpErrorResponse) => {
        appCtx.clearErros();
        appCtx.pushError(error.message)
        return of(error.message);
      })
    ).toPromise();
  }
}
