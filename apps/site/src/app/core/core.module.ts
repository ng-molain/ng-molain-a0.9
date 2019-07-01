import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';

import { NZ_I18N, zh_CN } from 'ng-zorro-antd';

/** 配置 angular i18n **/
registerLocaleData(zh);


/**
 * 仅能在 AppModule 中导入，其他功能模块不可重复导入
 */
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ]
})
export class CoreModule { }
