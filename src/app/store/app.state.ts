import { DataWeather } from '../weather/models/data-weather.model';


export interface AppState {
  weather: ReadonlyArray<DataWeather>;
}
