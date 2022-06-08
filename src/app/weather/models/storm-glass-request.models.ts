export interface StormGlassModel {
  hours: hours[];
  meta: meta,
}

export type hours = {
  airTemperature100m: airTemperature100m;
  time: Date;
}

type airTemperature100m = {
  noaa: number,
  sg: number,
}

type meta = {
  cost: number,
  dailyQuota: number,
  end: Date,
  lat: number,
  lng: number,
  params: params,
  requestCount: number,
  start: Date,
}

type params = ['waveHeight', 'airTemperature100m'];
