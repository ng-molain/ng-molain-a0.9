import { Injectable } from '@angular/core';
import { SystemInfo } from '../data';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ApplicationContext {
  systemInfo: SystemInfo;

  private _state: 'inited' | 'initing' | 'error';
  private _errors: string[];

  public get state() {
    return this._state;
  }

  public isInited() {
    return this._state === 'inited';
  }

  public markAsInited() {
    this._state = 'inited';
  }

  public markAsIniting() {
    this._state = 'initing';
  }

  public markAsError() {
    this._state = 'error';
  }

  public hasErrors() {
    return !_.isEmpty(this._errors);
  }

  public get errors() {
    return this._errors;
  }

  public clearErros() {
    this._errors = [];
  }

  public popError() {
    return this._errors.pop();
  }

  public pushError(error) {
    this._errors.push(error);
  }
}
