import { Injectable } from '@angular/core';
import { ICoord } from '../interfaces/interfaces';
import { HttpParams } from '@angular/common/http';
import { Feature, IMapBoxResult } from '../interfaces/searchPlaceReponse';
import { environment } from 'src/environments/environment';
import { PlacesApiclientService } from '../apis/places-apiclient.service';
import { MapServicesService } from './map-services.service';


@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  
  constructor(
    private placesAPI: PlacesApiclientService,
    private mapService: MapServicesService
    ) { 

    this.getUSerLocation()

  }
  
  public userLocation: ICoord | undefined
  public isloadinPlaces: boolean = false
  public places: Feature[] = []


  get isLocationReady(): boolean {
    return !!this.userLocation
  }

  getUSerLocation(): Promise<ICoord>{
    return new Promise((resolve, reject)=> {

      navigator.geolocation.getCurrentPosition(
        (geolocation: GeolocationPosition)=> {
          const location = {lat: geolocation.coords.latitude, long: geolocation.coords.longitude}
          resolve(location)
          this.userLocation = location},
        (error: GeolocationPositionError)=> reject(error.message)
      )
    }
    )
  }

  
  findLocation(search:string) {
    if(search.length===0) {
      this.places= []
      this.isloadinPlaces = false
      return
    }

    this.isloadinPlaces = true
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
    const accessToken = environment.accessToken
    const params = new HttpParams()
    .set("limit", 4)
    .set("access_token", accessToken)
    .set("proximity", '-73.990593,40.740121')

  
    this.placesAPI.get<IMapBoxResult>(search, {params: {
      proximity: `${this.userLocation?.long},${this.userLocation?.lat}`, 
    }}).subscribe(({features}:IMapBoxResult)=>{
      this.places = features
      this.isloadinPlaces = false
      this.places.forEach(p=> {
        p.price = Math.floor(Math.random() * ( 500 - 40 + 1)) + 40; 
      })
      this.mapService.createMarkersFromPlaces(this.places)
    }
    )

}


}
