import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { BasicAuthInterceptor } from '../basic-auth.interceptor';
import { AuthConfig } from '../../auth.config';
import { AuthcTokenService } from '../authc-token.service';

@Injectable()
export class SimpleAuthcInterceptor extends BasicAuthInterceptor {

    token: any;

    /** @override */
    isAuth(options: AuthConfig): boolean {
        const tokenService = this.injector.get<AuthcTokenService>(AuthcTokenService);
        const token = this.token = tokenService.get();
        return null !== token;
    }

    /** @override */
    setReq(req: HttpRequest<any>, options: AuthConfig): HttpRequest<any> {
        const { tokenSendTemplate, tokenSendKey, tokenSendPlace } = options;
        const token = tokenSendTemplate!.replace(/\$\{([\w]+)\}/g, (_: string, g) => this.token[g]);

        switch (tokenSendPlace) {
            case 'header':
                const obj = {};
                obj[tokenSendKey!] = token;
                req = req.clone({
                    setHeaders: obj,
                });
                break;
            case 'body':
                const body = req.body || {};
                body[tokenSendKey!] = token;
                req = req.clone({
                    body,
                });
                break;
            case 'url':
                req = req.clone({
                    params: req.params.append(tokenSendKey!, token),
                });
                break;
        }

        return req;
    }
}
