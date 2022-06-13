import { createSelector, createFeatureSelector } from '@ngrx/store';
import { dataWeek } from 'src/app/weather/models/data-weather.model';

export const selectDataWeekState = createFeatureSelector<Readonly<dataWeek>[]>('dataWeek');

export const getDataWeek = createSelector(
  selectDataWeekState,
  (dataWeek: Readonly<dataWeek>[]) => dataWeek
  );
