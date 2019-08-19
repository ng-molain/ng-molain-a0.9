import { AuthCacheStorage } from './typings';

export class LocalAuthCacheStorageService implements AuthCacheStorage {

    get(key: string): any {
        return JSON.parse(localStorage.getItem(key) || '{}') || {};
    }

    set(key: string, value: any | null): boolean {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }

    remove(key: string) {
        localStorage.removeItem(key);
    }
    
}
