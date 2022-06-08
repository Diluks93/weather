import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { OpenWeatherInterceptor } from './interceptors/open-weather.interceptor';
import { UnsplashInterceptor } from './interceptors/unsplash.interceptor';
import { StormGlassInterceptor } from './interceptors/storm-glass.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OpenWeatherInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnsplashInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: StormGlassInterceptor,
      multi: true,
    }
  ],
})
export class CoreModule { }
