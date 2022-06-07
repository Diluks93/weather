import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

const REQUEST = 'https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&client_id=ZbU_eUZ1Awpdf0cKgjD_1ZsZ72zRBfUTlkW516emWag'

@Injectable()
export class UnsplashInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }
}
