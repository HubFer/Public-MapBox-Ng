import { Component, Input, OnInit } from '@angular/core';
import { MapServicesService, PlacesService } from '../../services';
import { LngLatLike } from 'mapbox-gl';


@Component({
  selector: 'app-btn-mylocation',
  templateUrl: './btn-mylocation.component.html',
  styleUrls: ['./btn-mylocation.component.css']
})
export class BtnMylocationComponent implements OnInit {

  constructor(private mapServices: MapServicesService,
              private placesService: PlacesService) { }

  ngOnInit(): void {
  }

   goToMyLocation() {
    if(!this.placesService.isLocationReady) return
    const mylocation: LngLatLike = {lat: this.placesService.userLocation?.lat!, lon: this.placesService.userLocation?.long!}
    this.mapServices.goToLocation(mylocation)
  }

}
