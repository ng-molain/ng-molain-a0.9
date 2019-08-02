import { Provider, LOCALE_ID } from '@angular/core';
import { registerLocaleData as ngRegisterLocaleData } from '@angular/common';
import { default as ngZh } from '@angular/common/locales/zh';
import { default as ngEn } from '@angular/common/locales/en';
import { zh_CN as zorroZh, en_US as zorroEn, NZ_I18N } from 'ng-zorro-antd';
import * as dfEn from 'date-fns/locale/en';
import * as dfZh from 'date-fns/locale/zh_cn';
import * as _ from 'lodash';
import { I18N_CONFIG } from './i18n.config';

export interface LangData {
  text: string;
  abbr: string;
  ng: any;
  zorro: any;
  dateFns: any;
}

const __zh: LangData = {
  text: '简体中文',
  abbr: 'zh',
  ng: ngZh,
  zorro: zorroZh,
  dateFns: dfZh,
}

const __en: LangData = {
  text: 'English',
  abbr: 'en',
  ng: ngEn,
  zorro: zorroEn,
  dateFns: dfEn,
}

export const LOCALE_DATA = {
  "zh": __zh,
  "zh-CN": __zh,
  "zh-Hans": __zh,
  "en": __en,
  "en-US": __en
}

export const AVAILABLE_LOCALE_IDS = _.keys(LOCALE_DATA);

export const DEFAULT_LOCALE_ID = I18N_CONFIG.defaultLocaleId;

// TODO: 改为用 factory 的方式，这样可以动态修改语言
export const LOCALE_PROVIDERS: Provider[] = [
  { provide: LOCALE_ID, useValue: DEFAULT_LOCALE_ID },
  { provide: NZ_I18N, useValue: LOCALE_DATA[DEFAULT_LOCALE_ID].zorro }
];

function __registerAngularLocalData() {
  AVAILABLE_LOCALE_IDS.forEach(localeId => {
    const localeData = LOCALE_DATA[localeId].ng;
    ngRegisterLocaleData(localeData, localeId);
  });
}

export function registerLocaleData() {
  __registerAngularLocalData();
}