import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherComponent } from './weather.component';
import { ClockComponent } from './components/clock/clock.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    WeatherComponent,
    ClockComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    WeatherComponent
  ]
})
export class WeatherModule { }
