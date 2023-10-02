import { HttpClient, HttpHandler, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PlacesApiclientService extends HttpClient{

  public baseurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
  private accessToken = environment.accessToken


  constructor(handler:HttpHandler) {
    super(handler)
   }

   public override get<T>(url: string, options: {
    params?: HttpParams | {
      [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
      };
    }) {
    url = this.baseurl + url + '.json'

    return super.get<T>(url, {params: {
        limit: 5,
        access_token: this.accessToken,
        ...options.params
    }})
   }
}
