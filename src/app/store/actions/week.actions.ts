import { createAction, props } from '@ngrx/store';
import { dataWeek } from 'src/app/weather/models/data-weather.model';

export const retrieveDataWeek = createAction(
  '[Week API] Retrieve Data Week',
  props<{ dataWeek: Readonly<dataWeek>[] }>()
)
