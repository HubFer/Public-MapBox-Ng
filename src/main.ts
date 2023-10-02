import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import mapboxgl from 'mapbox-gl';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

mapboxgl.accessToken = environment.accessToken;


if (environment.production) {
  enableProdMode();
}

if(!navigator.geolocation) {
  alert('Browser does not allow geolocation')
  throw new Error ('Browser does not allow geolocation')
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
