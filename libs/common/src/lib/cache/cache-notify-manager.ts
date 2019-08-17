import { OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CacheNotifyResult, CacheNotifyType } from './typings';
import { CacheServiceExt } from './cache.service';


export class CacheNotifyManager {
    private readonly notifyBuffer: Map<string, BehaviorSubject<CacheNotifyResult>> = new Map<string, BehaviorSubject<CacheNotifyResult>>();

    private freqTick = 3000;
    private freqTime;

    constructor(
        private readonly cacheService: CacheServiceExt
    ) {
    }

    set freq(value: number) {
        this.freqTick = Math.max(20, value);
        this.abortExpireNotify();
        this.startExpireNotify();
    }

    private startExpireNotify() {
        this.checkExpireNotify();
        this.runExpireNotify();
    }

    private runExpireNotify() {
        this.freqTime = setTimeout(() => {
            this.checkExpireNotify();
            this.runExpireNotify();
        }, this.freqTick);
    }

    private checkExpireNotify() {
        const removed: string[] = [];
        this.notifyBuffer.forEach((_v, key) => {
            if (this.cacheService.has(key) && this.cacheService.getNone(key) === null) removed.push(key);
        });
        removed.forEach(key => {
            this.runNotify(key, 'expire');
            this.cacheService._remove(key, false);
        });
    }

    private abortExpireNotify() {
        clearTimeout(this.freqTime);
    }

    /** private calling */
    runNotify(key: string, type: CacheNotifyType) {
        if (!this.notifyBuffer.has(key)) return;
        this.notifyBuffer.get(key)!.next({ type, value: this.cacheService.getNone(key) });
    }

    notifyAll(type: CacheNotifyType) {
        this.notifyBuffer.forEach((_v, k) => this.runNotify(k, type));
    }

    /**
     * `key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：
     *
     * - 调用后除再次调用 `cancelNotify` 否则永远不过期
     * - 监听器每 `freq` (默认：3秒) 执行一次过期检查
     */
    notify(key: string): Observable<CacheNotifyResult> {
        if (!this.notifyBuffer.has(key)) {
            const change$ = new BehaviorSubject<CacheNotifyResult>(this.cacheService.getNone(key));
            this.notifyBuffer.set(key, change$);
        }
        return this.notifyBuffer.get(key)!.asObservable();
    }

    /**
     * 取消 `key` 监听
     */
    cancelNotify(key: string): void {
        if (!this.notifyBuffer.has(key)) return;
        this.notifyBuffer.get(key)!.unsubscribe();
        this.notifyBuffer.delete(key);
    }

    /** `key` 是否已经监听 */
    hasNotify(key: string): boolean {
        return this.notifyBuffer.has(key);
    }

    /** 清空所有 `key` 的监听 */
    clearNotify(): void {
        this.notifyBuffer.forEach(v => v.unsubscribe());
        this.notifyBuffer.clear();
    }

    // #endregion

    destroy(): void {
        this.abortExpireNotify();
        this.clearNotify();
    }
}