import { Injectable } from '@angular/core';
import { LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { Feature } from '../interfaces/searchPlaceReponse';

@Injectable({
  providedIn: 'root'
})
export class MapServicesService {

  constructor() { }

  private map: Map | undefined
  private markers: Marker[] = []

  get isMapReady(): boolean {
    return !!this.map
  }

  set setMap(map: Map | undefined) {
    if (map)
    this.map = map
  }

  goToLocation(coords: LngLatLike | undefined) {
    if (!this.isMapReady) throw new Error('Map is not ready')
    if(coords)
    this.map?.flyTo({zoom: 15, center: coords})
  }

  createMarkersFromPlaces(places:Feature[]) {
    if(!this.map) return
    this.markers.forEach(m=>m.remove())
  
    for (const place of places) {
      const [lng, lat] = place.center


      const popup = new Popup()
      .setHTML(`<h6> ${place.place_name}</h6>
                <span> Value per day: ${place.price} USD </span>`)
  
      const marker = new Marker({color: 'blue'})
      .setLngLat({lat: lat, lon: lng})
      .setPopup(popup)
      .addTo(this.map!)
  
      this.markers.push(marker)
  
    } 
  
  }
}
