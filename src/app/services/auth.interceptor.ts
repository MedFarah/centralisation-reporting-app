import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
   token = localStorage.getItem('token');
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = request;
    if (this.token != null) {
      authReq = request.clone({ headers: request.headers.set('Authorization','Bearer '+this.token) });
    }
    console.log("+++++++++"+this.token);
    return next.handle(request);
  }
}
