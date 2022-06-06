import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OpenWeatherInterceptor implements HttpInterceptor {

  API_KEY = '109b895d7239555afc9a38a8442bfab6'
  BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
  params = {
    ip: '?lat={lat}&lon={lon}&appid={API key}&units=metric',
    city: '?q={city name}&appid={API key}&units=metric',
  }

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }
}
