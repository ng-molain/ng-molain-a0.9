import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthConfig {

    storeKey?: string = '__token';

    tokenInvalidRedirect?: boolean = true;

    tokenExpireOffset?: number = 10; // 单位 s

    tokenSendKey?: string = 'token';

    tokenSendTemplate?: string = '${token}';

    tokenSendPlace?: 'header' | 'body' | 'url' = 'header';

    loginUrl?: string = `/login`;

    ignores?: RegExp[] | null = [/\/login/, /assets\//, /passport\//];

    allowAnonymousKey?: string = `__allow_anonymous`;

    executeOtherInterceptors?: boolean = true;

}