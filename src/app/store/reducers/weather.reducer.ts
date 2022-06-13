import { createReducer, on } from '@ngrx/store';

import { DataWeather } from 'src/app/weather/models/data-weather.model';
import { retrieveWeather, addWeather } from '../actions/weather.actions';

export const initialState: ReadonlyArray<DataWeather> = [];

export const weatherReducer = createReducer(
  initialState,
  on(retrieveWeather, (state, { weather }) => [...state, weather]),
  on(addWeather, (state, { weather }) => [...state, weather])
);
