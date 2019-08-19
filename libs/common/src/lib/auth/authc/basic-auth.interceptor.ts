import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Optional, Injector } from '@angular/core';
import { AuthConfig } from '../auth.config';
import * as _ from 'lodash';

class AuthHttpHandler implements HttpHandler {

    constructor(private next: HttpHandler, private interceptor: HttpInterceptor) { }

    handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
        return this.interceptor.intercept(req, this.next);
    }
}


export abstract class BasicAuthInterceptor implements HttpInterceptor {

    constructor(@Optional() protected injector: Injector) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const options = Object.assign(new AuthConfig(), this.injector.get<AuthConfig>(AuthConfig, undefined));

        const { ignores, allowAnonymousKey, executeOtherInterceptors } = options;

        if (ignores && !_.isEmpty(ignores)) {
            for (const item of ignores as RegExp[]) {
                if (item.test(req.url)) {
                    return next.handle(req);
                }
            }
        }

        const allowAnonymousReg = new RegExp(`[\?|&]${allowAnonymousKey}=[^&]+`);
        if (allowAnonymousKey && (req.params.has(allowAnonymousKey) || allowAnonymousReg.test(req.urlWithParams))) {
            return next.handle(req);
        }

        if (this.isAuth(options)) {
            req = this.setReq(req, options);
            return next.handle(req);
        }

        // need auth and !this.isAuth(options)
        // toLogin(...)
        const err$ = generateUnauthenticatedResponse(req);
        if (executeOtherInterceptors) {
            const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            const lastInterceptors = interceptors.slice(interceptors.indexOf(this) + 1);
            if (lastInterceptors.length > 0) {
                const chain = lastInterceptors.reduceRight(
                    (_next, _interceptor) => new AuthHttpHandler(_next, _interceptor),
                    { handle: (_: HttpRequest<any>) => err$ },
                );
                return chain.handle(req);
            }
        }

        return err$;
    }


    abstract isAuth(options: AuthConfig): boolean;

    abstract setReq(req: HttpRequest<any>, options: AuthConfig): HttpRequest<any>;

}

function generateUnauthenticatedResponse(req: HttpRequest<any>) {
    return new Observable((observer: Observer<HttpEvent<any>>) => {
        const res = new HttpErrorResponse({
            url: req.url,
            headers: req.headers,
            status: 401,
            statusText: `Unauthenticated from auth http interceptor of 'ng-molain'.`
        });

        observer.error(res);
    });
}

function toLogin() { }