export interface OpenWeatherRequest {
  coord: coord;
  weather: weather[];
  base: Readonly<string>;
  main: main;
  visibility: Readonly<number>;
  wind: wind;
  clouds: clouds;
  dt: Readonly<number>;
  sys: sys;
  timezone: Readonly<number>;
  id: Readonly<number>;
  name: Readonly<string>;
  cod: Readonly<number>;
}

export type coord = Readonly<{
  lon: number;
  lat: number;
}>;

type weather = Readonly<{
  id: number;
  main: string;
  description: string;
  icon: string;
}>;

type main = Readonly<{
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}>;

type wind = Readonly<{
  speed: number;
  deg: number;
}>;

type clouds = Readonly<{
  all: number;
}>;

type sys = Readonly<{
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}>;

