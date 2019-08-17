import { InjectionToken, Injectable } from '@angular/core';
import { ICache, ICacheStorage } from './typings';
import * as _ from 'lodash';
import { NgMolainCacheConfig } from './cache.config';

// export const ML_LOCALE_STORAGE_CACHE_TOKEN = new InjectionToken<ICacheStorage>('ML_STORE_STORAGE_TOKEN', {
//     providedIn: 'root',
//     factory: ML_STORE_STORAGE_TOKEN_FACTORY,
// });

// export function ML_STORE_STORAGE_TOKEN_FACTORY() {
//     return new LocalStorageCacheService();
// }

@Injectable({providedIn: 'root'})
export class LocalStorageCacheService implements ICacheStorage {

    private readonly _metaKeys: Set<string> = new Set<string>();

    private _config: NgMolainCacheConfig = {};
    private get _metaKey(): string {
        return this._config.metaKey || '__ml-cache-meta-keys__';
    }

    private get keyPrefix(): string {
        return this._config.prefix || '';
    };

    getKey(key: string) {
        return `${this.keyPrefix}${key}`;
    }


    constructor(
        config: NgMolainCacheConfig,
    ) {
        Object.assign(this._config, { ...new NgMolainCacheConfig(), ...config });
        this._loadMeta();
    }

    get(key: string): ICache {
        const _key = this.getKey(key);
        return JSON.parse(localStorage.getItem(_key) || 'null') || null;
    }

    set(key: string, value: ICache): boolean {
        const _key = this.getKey(key);
        localStorage.setItem(_key, JSON.stringify(value));
        this._pushMeta(key);
        return true;
    }

    remove(key: string) {
        this._removeMeta(key);
        const _key = this.getKey(key);
        localStorage.removeItem(_key);
    }

    has(key: string): boolean {
        return this._metaKeys.has(key);
    }

    keys(): string[] {
        return Array.from(this._metaKeys);
    }

    clear() {
        this._metaKeys.forEach((key: string) => {
            const _key = this.getKey(key);
            localStorage.removeItem(_key);
        });
        this._metaKeys.clear();
        this._saveMeta();
    }

    // ---- MetaKeys Manager ----
    private _loadMeta() {
        const cachedMetaEntry = this.get(this._metaKey);
        if (cachedMetaEntry && cachedMetaEntry.value) {
            const {value: cachedMeta} = cachedMetaEntry;
            cachedMeta.forEach(key => {
                this._metaKeys.add(key);
            });
        }
    }

    private _pushMeta(key: string) {
        if (this._metaKeys.has(key)) {
            return ;
        }
        this._metaKeys.add(key);
        this._saveMeta();
    }

    private _removeMeta(key: string) {
        if (!this._metaKeys.has(key)) {
            return;
        }
        this._metaKeys.delete(key);
        this._saveMeta();
    }

    private _saveMeta() {
        const metaData: string[] = Array.from(this._metaKeys);
        this.set(this._metaKey, <ICache>{value: metaData, expire: 0});
    }
}
