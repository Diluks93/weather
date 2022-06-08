import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { coord } from '../../models/open-weather-request.models';
import { WeatherService } from '../../services/weather.service';
import { Observable, of, Subject, map } from 'rxjs';
import { StormGlassModel } from '../../models/storm-glass-request.models';

type dataWeek = {
  day: string;
  temp: number;
}

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent /* implements OnInit */ {
  @Input() public icon: string = '';
  @Input() public temp: number | null = null;
  @Input() public type?: string;
  @Input() public coord?: coord;
  public weekdays$?: Observable<dataWeek[]>;


  constructor(private weatherService: WeatherService, private datePipe: DatePipe) { }

  ngOnChanges(): void {
    this.getWetherByCoord();
  }


  private getWetherByCoord() {
    this.weekdays$ = this.weatherService.getWeatherByCoord(this.coord as coord).pipe(
      map((resp: StormGlassModel) => {
        const array = []
        for(let i = 37; array.length < 6; i += 24) {
          array.push({
            day: this.datePipe.transform(resp.hours[i].time, 'EEE') as string,
            temp: resp.hours[i].airTemperature100m.noaa
          })
        }
        return array;
      }));
    }
}
