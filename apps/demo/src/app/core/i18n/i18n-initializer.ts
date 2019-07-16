import { Injectable } from '@angular/core';
import { TranslateService } from '@ng-molain/common';

@Injectable({ providedIn: 'root' })
export class I18nInitializer {

    constructor(private translateService: TranslateService) {
        this.translateService.addLangs(['zh-CN', 'en-US']);
        const defaultLang = translateService.getBrowserLang(); // return 'zh'
        translateService.setDefaultLang('zh-CN');
        // translateService.use('zh-CN');
    }

}