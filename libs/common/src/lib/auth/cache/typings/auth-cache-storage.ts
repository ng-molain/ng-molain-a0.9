
export interface AuthCacheStorage {
    get(key: string): any; // return AuthToken ?
    set(key: string, value: any): boolean;
    remove(key: string);
    // has(key: string): boolean;
    // keys(): string[];
    // clear();
}
