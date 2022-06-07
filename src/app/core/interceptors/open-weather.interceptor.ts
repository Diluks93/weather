import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class OpenWeatherInterceptor implements HttpInterceptor {
  private apiUrl = environment.apiUrlOW;
  private apiKey = environment.apiKeyOW;

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes('lon') || request.url.startsWith('?q=')) {
      const req = request.clone({ url: `${this.apiUrl}/${request.url}&appid=${this.apiKey}&units=metric`} );

      return next.handle(req);
    }

    return next.handle(request);
  }
}
