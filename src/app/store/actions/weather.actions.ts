import { createAction, props } from '@ngrx/store';
import { DataWeather } from '../../weather/models/data-weather.model';

export const addWeather = createAction(
  '[Weather] Add Weather',
  props<{ weather: DataWeather }>()
);
export const retrieveWeather = createAction(
  '[Weather API] Retrieve Weather',
  props<{ weather: Readonly<DataWeather> }>()
);
