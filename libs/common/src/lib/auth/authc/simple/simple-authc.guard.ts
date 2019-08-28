import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Inject, Injector, Injectable } from '@angular/core';
import { AuthConfig } from '../../auth.config';
import { AuthcTokenService } from '../authc-token.service';
import { toLogin } from '../helper';

@Injectable({ providedIn: 'root' })
export class SimpleAuthcGuard implements CanActivate, CanActivateChild, CanLoad {
    private options: AuthConfig;
    private url: string | null | undefined;

    constructor(
        @Inject(AuthcTokenService) private tokenSercie: AuthcTokenService,
        private injector: Injector,
        config: AuthConfig
    ) {
        this.options = Object.assign(new AuthConfig, config);
    }

    private _isAuth(): boolean {
        const tokenService = this.injector.get<AuthcTokenService>(AuthcTokenService);
        const token = tokenService.get();
        return null !== token;
    }

    private process(): boolean {
        // const res = CheckSimple(this.srv.get() as SimpleTokenModel);
        const res = this._isAuth();
        if (!res) {
            toLogin(this.options, this.injector, this.url);
        }
        return res;
    }

    // lazy loading
    /** @override */
    canLoad(route: Route, _segments: UrlSegment[]): boolean {
        this.url = route.path;
        return this.process();
    }

    // all children route
    /** @override */
    canActivateChild(_childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.url = state.url;
        return this.process();
    }

    // route
    /** @override */
    canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.url = state.url;
        return this.process();
    }
}
