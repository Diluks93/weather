import { createReducer, on } from '@ngrx/store';

import { retrieveDataWeek } from '../actions/week.actions';

export const initialState: any = [];

export const weekReducer = createReducer(
  initialState,
  on(retrieveDataWeek, (state, { dataWeek }) => dataWeek)
);
