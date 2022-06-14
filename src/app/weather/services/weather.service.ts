import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { withCache } from '@ngneat/cashew';

import { Observable } from 'rxjs';

import { coord, OpenWeatherRequest } from '../models/open-weather-request.models';
import { StormGlassModel } from '../models/storm-glass-request.models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  public getWeatherByCity(city: string): Observable<OpenWeatherRequest> {
    return this.http.get<OpenWeatherRequest>(`?q=${city}`, {
      context: withCache({
        mode: 'stateManagement',
      })
    })
  }

  public getWeatherByIP({ lat, lon }: coord): Observable<OpenWeatherRequest> {
    return this.http.get<OpenWeatherRequest>(`?lat=${lat}&lon=${lon}`, {
      context: withCache({
        mode: 'stateManagement',
      })
    })
  }

  public getWeatherByCoord({ lat, lon }: coord): Observable<StormGlassModel> {
    return this.http.get<StormGlassModel>(`?lat=${lat}&lng=${lon}`, {
      context: withCache({
        mode: 'stateManagement',
      })
    })
  }

  public getPictureUrl(query: string): Observable<string> {
    return this.http.get<string>(`&query=${query}`, {
      context: withCache({
        mode: 'stateManagement',
      })
    })
  }
}
