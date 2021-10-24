import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  loggedOnUser: string;

  constructor() { }

  private handleError(err: HttpErrorResponse): Observable<any> {
    return observableThrowError(err);
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    try {
      this.loggedOnUser = localStorage.getItem('token');
      if (this.loggedOnUser) {
        req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + this.loggedOnUser) });
      }
      if (!req.headers.has('Content-Type')) {
        req = req.clone({ headers: req.headers.append('Content-Type', 'application/json') });
      }
      // setting the accept header
      req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
      return next.handle(req)
        .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
    } catch (e) {
      this.handleError(e);
    }
  }
}
