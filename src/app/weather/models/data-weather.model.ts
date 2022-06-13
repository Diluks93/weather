import { coord } from './open-weather-request.models';

export interface DataWeather {
  city: string;
  icon: string;
  temp: number | null;
  type: string;
  coord: coord;
}

export type dataWeek = {
  day: string;
  temp: number;
}
