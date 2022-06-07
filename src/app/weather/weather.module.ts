import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherComponent } from './weather.component';
import { ClockComponent } from './components/clock/clock.component';
import { SharedModule } from '../shared/shared.module';
import { WidgetComponent } from './components/widget/widget.component';
import { ImgComponent } from './components/img/img.component';




@NgModule({
  declarations: [
    WeatherComponent,
    ClockComponent,
    WidgetComponent,
    ImgComponent
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
