import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DefaultHttpInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => this._handleError(error))
    );
  }
  
  private _handleError(error: HttpErrorResponse): Observable<any> {
    if (error.status === 401) {
      console.error("Http error handler", error);
      return of(error);
    }
    

    // 被处理过的异常如果不重新抛出，上层调用是拿不到的
    throw HttpErrorResponse;
  }
}