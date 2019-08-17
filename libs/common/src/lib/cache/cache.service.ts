import { OnDestroy, Injectable } from '@angular/core';
import { NgMolainCacheConfig } from './cache.config';
import { Observable, of } from 'rxjs';
import { addSeconds } from 'date-fns';
import { tap, map } from 'rxjs/operators';
import { ICache, CacheNotifyResult } from './typings';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { CacheProxyService } from './cache-proxy.service';
import { CacheNotifyManager } from './cache-notify-manager';

@Injectable({ providedIn: 'root' })
export class CacheService implements OnDestroy {

    private _config: NgMolainCacheConfig = {};
    private readonly notifyManager: CacheNotifyManager;

    constructor(
        config: NgMolainCacheConfig,
        private readonly cacheStorage: CacheProxyService,
        private readonly http: HttpClient,
    ) {
        Object.assign(this._config, { ...new NgMolainCacheConfig(), ...config });
        this.notifyManager = new CacheNotifyManager(this);
    }

    ngOnDestroy() {
        this.notifyManager.destroy();
    }

    set<T>(key: string, data: Observable<T>, options?: { type?: 's'; expire?: number }): Observable<T>;
    set(key: string, data: Observable<any>, options?: { type?: 's'; expire?: number }): Observable<any>;
    set(key: string, data: {}, options?: { type?: 's'; expire?: number }): void;
    set(key: string, data: {}, options: { type: 'm' | 's'; expire?: number }): void;

    set(key: string, data: any | Observable<any>, options: { type?: 'm' | 's'; expire?: number } = {}): any {
        let expire = 0;
        if (options.expire) {
            expire = addSeconds(new Date(), options.expire).valueOf();
        }

        if (data instanceof Observable) {
            return data.pipe(
                tap((value: any) => {
                    // tslint:disable-next-line:no-non-null-assertion
                    this._save(options.type!, key, <ICache>{ value, expire });
                })
            );
        }

        // tslint:disable-next-line:no-non-null-assertion
        this._save(options.type!, key, <ICache>{ value: data, expire });
    }

    private _save(type: 'm' | 's', key: string, value: ICache) {
        // if (type === 'm') {
        //     this._memoryCacheService.set(key, value);
        // } else if (type === 's') {
        //     this._localStorageCacheService.set(key, value);
        // }
        this.cacheStorage.set(type, key, value);

        // notify change
        this.notifyManager.runNotify(key, 'set');
    }

    get<T>(key: string, options?: { mode: 'promise'; type?: 'm' | 's'; expire?: number; }): Observable<T>;
    get(key: string, options?: { mode: 'promise'; type?: 'm' | 's'; expire?: number; }): Observable<any>;
    get(key: string, options?: { mode: 'none'; type?: 'm' | 's'; expire?: number; }): any;

    get(key: string, options: { mode?: 'promise' | 'none'; type?: 'm' | 's'; expire?: number; } = {}): Observable<any> | any {
        const isPromise = options.mode !== 'none' && this._config.mode === 'promise';
        const cachedEntry: ICache = this.cacheStorage.get(key);

        if (!cachedEntry || (cachedEntry.expire && cachedEntry.expire > 0 && cachedEntry.expire < new Date().valueOf())) {
            if (isPromise) {
                return this.http.get(key).pipe(
                    map((result: any) => _.get(result, this._config.reName as string[]), null),
                    tap(v => this.set(key, v, options as any)),
                );
            }

            return null;
        }

        return isPromise ? of(cachedEntry.value) : cachedEntry.value
    }

    getNone<T>(key: string): T;
    getNone(key: string): any {
        return this.get(key, { mode: 'none' });
    }

    tryGet<T>(key: string, data: Observable<T>, options?: { type?: 's'; expire?: number }): Observable<T>;
    tryGet(key: string, data: Observable<any>, options?: { type?: 's'; expire?: number }): Observable<any>;
    tryGet(key: string, data: {}, options?: { type?: 's'; expire?: number }): any;
    tryGet(key: string, data: {}, options: { type: 'm' | 's'; expire?: number }): any;

    tryGet(key: string, data: any | Observable<any>, options: { type?: 'm' | 's'; expire?: number } = {}): any {
        const result = this.getNone(key);
        
        if (result !== null) {
            return of(result);
        }

        if (data instanceof Observable) {
            return this.set(key, data as Observable<any>, options as any);
        }

        this.set(key, data, options as any);
        return data;
    }

    has(key: string): boolean {
        return this.cacheStorage.has(key);
    }

    remove(key: string) {
        this._remove(key, true);
    }

    /** private calling */
    _remove(key: string, needNotify: boolean) {
        if (needNotify) {
            this.notifyManager.runNotify(key, 'remove');
        }
        
        this.cacheStorage.remove(key);
    }

    clear() {
        this.notifyManager.notifyAll('remove');
        this.cacheStorage.clear();
    }

    
    // ---- notify ----
    notify(key: string): Observable<CacheNotifyResult> {
        return this.notifyManager.notify(key);
    }

    cancelNotify(key: string): void {
        this.notifyManager.cancelNotify(key);
    }

    hasNotify(key: string): boolean {
        return this.notifyManager.hasNotify(key);
    }

    clearNotify(): void {
        this.notifyManager.clearNotify();
    }
}