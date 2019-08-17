import { Injectable, Type } from '@angular/core';
import { LocalStorageCacheService } from './local-storage-cahce.service';
import { MemoryCacheService } from './memory-cache.service';
import { ICacheStorage, ICache } from './typings';
import * as _ from 'lodash';

export type MemoryCacheType = 'm';
export type LocalStorageCacheType = 's';

export type CacheStorageType = MemoryCacheType | LocalStorageCacheType | Type<MemoryCacheService> | Type<LocalStorageCacheService>;

@Injectable({ providedIn: 'root' })
export class CacheProxyService {

    private readonly _storageMap = new Map<CacheStorageType, ICacheStorage>();

    constructor(
        private readonly _memoryCacheService: MemoryCacheService,
        private readonly _localStorageCacheService: LocalStorageCacheService,
    ) {
        this._storageMap.set('m', _memoryCacheService);
        this._storageMap.set(MemoryCacheService, _memoryCacheService);
        this._storageMap.set('s', _localStorageCacheService);
        this._storageMap.set(LocalStorageCacheService, _localStorageCacheService);
    }

    get allStorages() {
        return _.uniqWith(Array.from(this._storageMap.values()), (a, b) => a === b);
    }

    getCacheStorage(type: CacheStorageType) {
        const cacheStorage = this._storageMap.get(type);

        if (!cacheStorage) {
            throw new Error(`Invalide cache storage type '${type}'. Avaiable type has ('m', 's', Type<MemoryCacheService>, Type<LocalStorageCacheService>)`);
        }

        return cacheStorage;
    }

    set(type: CacheStorageType, key: string, value: ICache) {
        const cacheStorage = this.getCacheStorage(type);
        return cacheStorage.set(key, value);
    }

    get(key: string, type?: CacheStorageType): ICache {
        if (type) {
            const cacheStorage = this.getCacheStorage(type);
            return cacheStorage.get(key);
        }

        const allStorages = this.allStorages;
        const storage = allStorages.find(it => it.has(key));

        if (storage) {
            return storage.get(key);
        }
    }

    has(key: string): boolean {
        return _.some(this.allStorages, (it) => it.has(key));
    }

    remove(key: string) {
        this.allStorages.forEach(it => {
            if (it.has(key)) {
                it.remove(key);
            }
        });
    }

    clear() {
        this.allStorages.forEach(it => {
            it.clear();
        });
    }

}