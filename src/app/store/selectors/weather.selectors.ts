import { createSelector, createFeatureSelector } from '@ngrx/store';
import { DataWeather } from 'src/app/weather/models/data-weather.model';


export const selectWeatherState = createFeatureSelector<ReadonlyArray<DataWeather>>('weather');

export const getLastWeather = createSelector(
  selectWeatherState,
  (weather: ReadonlyArray<DataWeather>) => weather[weather.length - 1]
  );

export const selectWeather = createSelector(
  selectWeatherState,
  (state: ReadonlyArray<DataWeather>) => state
);
