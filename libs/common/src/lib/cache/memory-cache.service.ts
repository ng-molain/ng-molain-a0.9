import { Injectable, OnDestroy } from '@angular/core';
import { ICache, ICacheStorage } from './typings';

@Injectable({providedIn: 'root'})
export class MemoryCacheService implements ICacheStorage, OnDestroy {

    private readonly memory: Map<string, ICache> = new Map<string, ICache>();

    ngOnDestroy() {
        this.memory.clear();
    }

    get(key: string): ICache {
        return this.memory.get(key);
    }
    set(key: string, value: ICache): boolean {
        this.memory.set(key, value);
        return true;
    }
    remove(key: string) {
        this.memory.delete(key);
    }
    has(key: string): boolean {
        return this.memory.has(key);
    }
    keys(): string[] {
        return Array.from(this.memory.keys());
    }
    clear() {
        this.memory.clear();
    }
}