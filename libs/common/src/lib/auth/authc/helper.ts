import { Injector } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthConfig } from '../auth.config';
import { AuthcTokenService } from './authc-token.service';
import { Router } from '@angular/router';

export function toLogin(options: AuthConfig, injector: Injector, url: string | null | undefined) {
    (injector.get<AuthcTokenService>(AuthcTokenService)).referrer = url;
    if (options.tokenInvalidRedirect === true) {
        setTimeout(() => {
            if (/^https?:\/\//g.test(options.loginUrl!)) {
                injector.get(DOCUMENT).location.href = options.loginUrl as string;
            } else {
                injector.get<Router>(Router).navigate([options.loginUrl]);
            }
        });
    }
}
