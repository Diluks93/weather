import { DataWeather, dataWeek } from '../weather/models/data-weather.model';


export interface AppState {
  weather: ReadonlyArray<DataWeather>;
  dataWeek: ReadonlyArray<dataWeek>;
}
