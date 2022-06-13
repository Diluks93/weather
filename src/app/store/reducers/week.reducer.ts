import { createReducer, on } from '@ngrx/store';

import { dataWeek } from 'src/app/weather/models/data-weather.model';
import { retrieveDataWeek } from '../actions/week.actions';

export const initialState: any = [];

export const weekReducer = createReducer(
  initialState,
  on(retrieveDataWeek, (state, { dataWeek }) => dataWeek)
);
