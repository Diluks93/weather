import { Injectable } from '@angular/core';

import { coord } from '../models/open-weather-request.models';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  getLocation(): Promise<coord> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({lon: resp.coords.longitude, lat: resp.coords.latitude});
      },
      err => {
        reject(err);
      });
    });
  }
}
