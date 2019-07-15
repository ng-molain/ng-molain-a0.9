import {ChangeDetectorRef, EventEmitter, Injectable, OnDestroy, Pipe, PipeTransform} from '@angular/core';
import {DefaultLangChangeEvent, LangChangeEvent, TranslateService, TranslationChangeEvent} from './translate.service';
import {equals, isDefined} from './util';
import { Subscription } from 'rxjs';

@Injectable()
@Pipe({
  name: 'translate',
  pure: false // required to update the value when the promise is resolved
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  value: string = '';
  lastKey: string;
  lastParams: any[];
  // onTranslationChange: EventEmitter<TranslationChangeEvent>;
  // onLangChange: EventEmitter<LangChangeEvent>;
  // onDefaultLangChange: EventEmitter<DefaultLangChangeEvent>;
  onTranslationChangeSub: Subscription;
  onLangChangeSub: Subscription;
  onDefaultLangChangeSub: Subscription;

  constructor(private translate: TranslateService, private _ref: ChangeDetectorRef) {
  }

  updateValue(key: string, interpolateParams?: Object, translations?: any): void {
    const onTranslation = (res: string) => {
      this.value = res !== undefined ? res : key;
      this.lastKey = key;
      this._ref.markForCheck();
    };
    if (translations) {
      const res = this.translate.getParsedResult(translations, key, interpolateParams);
      if (typeof res.subscribe === 'function') {
        res.subscribe(onTranslation);
      } else {
        onTranslation(res);
      }
    }
    this.translate.get(key, interpolateParams).subscribe(onTranslation);
  }

  transform(query: string, ...args: any[]): any {
    if (!query || query.length === 0) {
      return query;
    }

    // if we ask another time for the same key, return the last value
    if (equals(query, this.lastKey) && equals(args, this.lastParams)) {
      return this.value;
    }

    let interpolateParams: Object;
    if (isDefined(args[0]) && args.length) {
      if (typeof args[0] === 'string' && args[0].length) {
        // we accept objects written in the template such as {n:1}, {'n':1}, {n:'v'}
        // which is why we might need to change it to real JSON objects such as {"n":1} or {"n":"v"}
        const validArgs: string = args[0]
          .replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":')
          .replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
        try {
          interpolateParams = JSON.parse(validArgs);
        } catch (e) {
          throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${args[0]}`);
        }
      } else if (typeof args[0] === 'object' && !Array.isArray(args[0])) {
        interpolateParams = args[0];
      }
    }

    // store the query, in case it changes
    this.lastKey = query;

    // store the params, in case they change
    this.lastParams = args;

    // set the value
    this.updateValue(query, interpolateParams);

    // if there is a subscription to onLangChange, clean it
    this._dispose();

    // subscribe to onTranslationChange event, in case the translations change
    if (!this.onTranslationChangeSub) {
      this.onTranslationChangeSub = this.translate.onTranslationChange.subscribe((event: TranslationChangeEvent) => {
        if (this.lastKey && event.lang === this.translate.currentLang) {
          this.lastKey = null;
          this.updateValue(query, interpolateParams, event.translations);
        }
      });
    }

    // subscribe to onLangChange event, in case the language changes
    if (!this.onLangChangeSub) {
      this.onLangChangeSub = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
        if (this.lastKey) {
          this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
          this.updateValue(query, interpolateParams, event.translations);
        }
      });
    }

    // subscribe to onDefaultLangChange event, in case the default language changes
    if (!this.onDefaultLangChangeSub) {
      this.onDefaultLangChangeSub = this.translate.onDefaultLangChange.subscribe(() => {
        if (this.lastKey) {
          this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
          this.updateValue(query, interpolateParams);
        }
      });
    }

    return this.value;
  }

  /**
   * Clean any existing subscription to change events
   */
  private _dispose(): void {
    if (typeof this.onTranslationChangeSub !== 'undefined') {
      this.onTranslationChangeSub.unsubscribe();
      this.onTranslationChangeSub = undefined;
    }
    if (typeof this.onLangChangeSub !== 'undefined') {
      this.onLangChangeSub.unsubscribe();
      this.onLangChangeSub = undefined;
    }
    if (typeof this.onDefaultLangChangeSub !== 'undefined') {
      this.onDefaultLangChangeSub.unsubscribe();
      this.onDefaultLangChangeSub = undefined;
    }
  }

  ngOnDestroy(): void {
    this._dispose();
  }
}
