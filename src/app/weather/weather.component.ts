import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { OpenWeatherRequest } from './models/open-weather-request.models';
import { GeolocationService } from './services/geolocation.service';
import { WeatherService } from './services/weather.service';
import { DataWeather } from './models/data-weather.model';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { getLastWeather, selectWeather } from '../store/selectors/weather.selectors';
import { retrieveWeather } from '../store/actions/weather.actions';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent implements OnInit, AfterViewInit {
  @ViewChild('valueCity')
  public inputElement?: ElementRef;
  public dataWeathers$?: Observable<DataWeather> | undefined;

  constructor(private weatherService: WeatherService, private geolocation: GeolocationService, private store: Store) { }

  public ngOnInit(): void {
    this.getWetherByCoord();
    this.dataWeathers$ = this.store.select(getLastWeather).pipe(
      tap((weather: DataWeather) => {
        console.log(weather);
      }
      ));
  }

  public ngAfterViewInit(): void {
    setTimeout(() => {
    const input$ = fromEvent(this.inputElement?.nativeElement, 'keyup').pipe(
      map(((event: unknown) => ((event as KeyboardEvent).target as HTMLInputElement).value)),
      filter((value: string) => value.length > 3),
      debounceTime(500),
      distinctUntilChanged(),
      tap((value: string) => this.getWetherByCity(value))
    );
    input$.subscribe();
    this.dataWeathers$ = this.store.select(getLastWeather).pipe(
      tap((weather: DataWeather) => {
        console.log(weather);
      }
      ));
    }, 1000);
  }

  private getWetherByCoord(): void {
    this.geolocation.getLocation()
      .then(resp => {
        this.weatherService.getWeatherByIP(resp).subscribe(resp => {
          this.store.dispatch(retrieveWeather({ weather: this.getDataWeather(resp) }));
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  private getWetherByCity(city: string): void {
    this.weatherService.getWeatherByCity(city).subscribe(resp => {
      this.store.dispatch(retrieveWeather({ weather: this.getDataWeather(resp) }));
    });
  }

  private getDataWeather({name, weather, main, coord}: OpenWeatherRequest) {
    return {
      city: name,
      icon: weather[0].icon,
      temp: Math.round(main.temp),
      type: weather[0].main,
      coord: {
        lat: coord.lat,
        lon: coord.lon
      }
    };
  }
}
