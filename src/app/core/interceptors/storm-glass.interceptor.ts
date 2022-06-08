import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class StormGlassInterceptor implements HttpInterceptor {
  private apiUrl = environment.apiUrlSG;
  private apiKey = environment.apiKeySG;

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes('lng')) {
      const headers = new HttpHeaders({
        'Authorization': `${this.apiKey}`,
      });
      const req = request.clone({ url: `${this.apiUrl}${request.url}&params=waveHeight,airTemperature100m`, headers });
      return next.handle(req);
    }

    return next.handle(request);
  }
}
