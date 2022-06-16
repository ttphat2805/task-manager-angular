import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private token: any;

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.token = localStorage.getItem("auth_tkn");
    if (this.token) {
      request = request.clone({
        setHeaders: {
          enctype: 'multipart/form-data',
          'x-token': this.token,
        },
      });
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      })
    );
  }
}
