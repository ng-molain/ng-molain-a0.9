

/**
 * 缓存内容对象
 * 为了方便调用，应该简化用户调用参数构造，应该曝露更简洁的接口
 */
export interface ICache {
    /**
     * 缓存的内容
     */
    value: any;
    /**
     * 过期时间，单位为 ‘S’， 0 标识不过期
     */
    expire: number;
}

/**
 * 缓存仓库接口，如 memoryStore， localStorigeStore
 */
export interface ICacheStorage {
    
    get(key: string): ICache;
    set(key: string, value: ICache): boolean;
    remove(key: string);
    has(key: string): boolean;
    keys(): string[];
    clear();
}

export type CacheNotifyType = 'set' | 'remove' | 'expire';

export interface CacheNotifyResult {
    type: CacheNotifyType,
    value?: any;
}