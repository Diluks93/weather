import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpCacheInterceptorModule } from '@ngneat/cashew';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { WeatherModule } from './weather/weather.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { weatherReducer } from './store/reducers/weather.reducer';
import { weekReducer } from './store/reducers/week.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    WeatherModule,
    StoreModule.forRoot(
      {
        weather: weatherReducer,
        dataWeek: weekReducer
      },
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
          strictActionWithinNgZone: true,
          strictActionTypeUniqueness: true,
      }
  }),
    EffectsModule.forRoot([]),
    HttpCacheInterceptorModule.forRoot({
      // 2 hours in milliseconds
      ttl: 2 * 60 * 60 * 1000,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
