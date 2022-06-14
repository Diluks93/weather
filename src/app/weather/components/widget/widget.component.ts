import { Component, Input, OnChanges } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { coord } from '../../models/open-weather-request.models';
import { dataWeek } from '../../models/data-weather.model';
import { WeatherService } from '../../services/weather.service';
import { retrieveDataWeek } from 'src/app/store/actions/week.actions';
import { getDataWeek } from 'src/app/store/selectors/week.selectors';


@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent implements OnChanges {
  @Input() public icon: string = '';
  @Input() public temp: number | null = null;
  @Input() public type?: string;
  @Input() public coord?: coord;
  public weekdays$?: Observable<Readonly<dataWeek>[]>;


  constructor(private weatherService: WeatherService, private datePipe: DatePipe, private store: Store) { }

  ngOnChanges(): void {
    this.getWetherByCoord();
    this.weekdays$ = this.store.select(getDataWeek);
  }


  private getWetherByCoord() {
    this.weatherService.getWeatherByCoord(this.coord as coord).subscribe(resp => {
      const array = []
      for(let i = 37; array.length < 6; i += 24) {
        array.push({
          day: this.datePipe.transform(resp.hours[i].time, 'EEE') as string,
          temp: Math.round(resp.hours[i].airTemperature100m.noaa)
        })
      }
      this.store.dispatch(retrieveDataWeek({ dataWeek: array }));
    });
  }
}
