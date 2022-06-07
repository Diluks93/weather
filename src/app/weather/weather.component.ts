import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { OpenWeatherRequest } from './models/open-weather-request.models';
import { GeolocationService } from './services/geolocation.service';
import { WeatherService } from './services/weather.service';
import { DataWeather } from './models/data-weather.model';
import { debounceTime, distinctUntilChanged, filter, fromEvent, pluck, tap } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, AfterViewInit {
  @ViewChild('valueCity') inputElement?: ElementRef;
  public dataWeather: DataWeather = {
    city: '',
    icon: '',
    temp: null
  };

  constructor(private weatherService: WeatherService, private geolocation: GeolocationService) { }

  public ngOnInit(): void {
    //this.getWetherByCoord();
  }

  public ngAfterViewInit(): void {
    // fromEvent(this.inputElement?.nativeElement, 'keyup')
    //   .pipe(
    //     debounceTime(500),
    //     pluck('target', 'value'),
    //     distinctUntilChanged(),
    //     filter((value) => `${value}`.trim().length > 3),
    //     tap((value) => value),
    //   )
    //   .subscribe((value) => {
    //     this.getWetherByCity(`${value}`);
    //   });
  }

  private getWetherByCoord(): void {
    this.geolocation.getLocation()
      .then(resp => {
        this.weatherService.getWeatherByIP(resp).subscribe(resp => {
          this.dataWeather = this.getDataWeather(resp);
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  private getWetherByCity(city: string): void {
    this.weatherService.getWeatherByCity(city).subscribe(resp => {
      this.dataWeather = this.getDataWeather(resp);
    });
  }

  private getDataWeather(object: OpenWeatherRequest): DataWeather {
    return {
      city: object.name,
      icon: object.weather[0].icon,
      temp: Math.round(object.main.temp)
    };
  }

}
