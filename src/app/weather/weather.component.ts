import { Component, OnInit } from '@angular/core';

import { GeolocationService } from './services/geolocation.service';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public city: string = '';

  constructor(private weatherService: WeatherService, private geolocation: GeolocationService) { }

  ngOnInit(): void {
    //this.getWetherByCoord();
  }

  private getWetherByCoord(): void {
    this.geolocation.getLocation()
      .then(resp => {
        this.weatherService.getWeatherByIP(resp).subscribe(resp => {
          this.city = resp.name;
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  private getWetherByCity(): void {
    this.weatherService.getWeatherByCity(this.city).subscribe(resp => {
      console.log(resp);
    });
  }

}
