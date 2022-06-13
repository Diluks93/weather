import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
