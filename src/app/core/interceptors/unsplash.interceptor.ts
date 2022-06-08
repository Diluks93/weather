import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// const REQUEST = 'https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&client_id=ZbU_eUZ1Awpdf0cKgjD_1ZsZ72zRBfUTlkW516emWag'

@Injectable()
export class UnsplashInterceptor implements HttpInterceptor {
  private apiUrl = environment.apiUrlUnsplash;
  private apiKey = environment.apiKeyUnsplash;

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith('&query=')) {
      const req = request.clone({ url: `${this.apiUrl}${request.url}&client_id=${this.apiKey}` } );

      return next.handle(req);
    }

    return next.handle(request);
  }
}
