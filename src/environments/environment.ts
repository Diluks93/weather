// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrlOW: 'https://api.openweathermap.org/data/2.5/weather',
  apiKeyOW: '109b895d7239555afc9a38a8442bfab6',
  apiUrlSG: 'https://api.stormglass.io/v2/weather/point',
  //apiKeySG: '0fe16de2-e577-11ec-905d-0242ac130002-0fe16e6e-e577-11ec-905d-0242ac130002',
  apiKeySG: '4f23c6be-ea7f-11ec-bea1-0242ac130002-4f23c7f4-ea7f-11ec-bea1-0242ac130002',
  apiUrlUnsplash: 'https://api.unsplash.com/photos/random?orientation=landscape',
  apiKeyUnsplash: 'ZbU_eUZ1Awpdf0cKgjD_1ZsZ72zRBfUTlkW516emWag'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
