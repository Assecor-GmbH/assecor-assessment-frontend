import {Injectable} from '@angular/core';
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HandleErrorService} from './handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private handleError: HandleErrorService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('success');
          } else {
            console.log('loading');
          }
          return event;
        }),
        catchError((err, caught) => {
          if (err.status && (err.status === 401 || err.status === 403)) {
            // TODO: Display suitable message!
          }
          if (err.status && err.status !== 400) {
            this.handleError.handle(err);
          }
          return throwError(err);
        })
      );
  }
}
