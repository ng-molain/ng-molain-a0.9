import { AuthConfig } from '../auth.config';
import { AuthCacheStorage } from '../cache';
import { BehaviorSubject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';

/**
 * T is type of token
 */
export class AuthcService<T = any> {
    private change$ = new BehaviorSubject<T | null>(null);

    private _referrer: string;
    get referrer() {
        return this.referrer;
    }

    constructor(
        private readonly options: AuthConfig,
        private readonly authCache: AuthCacheStorage,
    ) {
        // TODO: check options
    }

    get loginUrl(): string | undefined {
        return this.options.loginUrl;
    }

    get storeKey(): string {
        return this.options.storeKey || '__token';
    }

    set(data: T): boolean {
        this.change$.next(data);
        return this.authCache.set(this.storeKey, data);
    }

    get(type?: any);
    get<S extends T>(type?: new () => S): S {
        const data = this.authCache.get(this.storeKey);
        return type ? (Object.assign(new type(), data) as S) :  (data as S);
    }

    clear() {
        this.change$.next(null);
        this.authCache.remove(this.storeKey);
    }

    change(): Observable<T | null> {
        return this.change$.pipe(share());
    }
}
