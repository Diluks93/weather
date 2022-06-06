import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { coord, OpenWeatherRequest } from '../models/open-weather-request.models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  public getWeatherByCity(city: string): Observable<OpenWeatherRequest> {
    return this.http.get<OpenWeatherRequest>(`?q=${city}`)
  }

  public getWeatherByIP({ lat, lon }: coord): Observable<OpenWeatherRequest> {
    return this.http.get<OpenWeatherRequest>(`?lat=${lat}&lon=${lon}`)
  }

  public getWeatherByCoord({ lat, lon }: coord): Observable<object> {
    return this.http.get(`?lat=${lat}&lng=${lon}`)
  }
}
