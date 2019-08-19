import { AuthCacheStorage } from './typings';

export class FlashAuthCacheStorageService implements AuthCacheStorage {
    private cache: { [key: string]: any | null } = {};

    get(key: string) {
        return this.cache[key] || ({} as any);
    }

    set(key: string, value: any): boolean {
        this.cache[key] = value;
        return true;
    }

    remove(key: string) {
        this.cache[key] = null;
    }


}
