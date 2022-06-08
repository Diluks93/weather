import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { WeatherComponent } from './weather.component';
import { ClockComponent } from './components/clock/clock.component';
import { SharedModule } from '../shared/shared.module';
import { WidgetComponent } from './components/widget/widget.component';
import { ImgComponent } from './components/img/img.component';
import { BackgroundDirective } from './directives/background.directive';
import { MainBackgroundDirective } from './directives/main-background.directive';




@NgModule({
  declarations: [
    WeatherComponent,
    ClockComponent,
    WidgetComponent,
    ImgComponent,
    BackgroundDirective,
    MainBackgroundDirective
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    WeatherComponent
  ],
  providers: [
    DatePipe
  ]
})
export class WeatherModule { }
