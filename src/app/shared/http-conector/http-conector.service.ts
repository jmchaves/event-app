import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHeaders,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpConectorService implements HttpInterceptor {
  private apiUrl: string;

  constructor() {
    this.apiUrl = 'https://api.mobilize.us/v1/';
  }

  // This class it's very important, every single api request has to pass by.
  // Good way to handle the http configuration in one file.
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = request.clone({
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      url: this.apiUrl + request.url
    });
    return next.handle(authReq);
  }
}
