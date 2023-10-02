import { Component, OnInit } from '@angular/core';
import { LngLatLike } from 'mapbox-gl';
import { MapServicesService, PlacesService } from '../../services';
import { Feature } from '../../interfaces/searchPlaceReponse';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {

  constructor(private mapService: MapServicesService,
              private placesService: PlacesService) { }
  ngOnInit(): void {

  }

  selectedId: string | undefined
  

  get isLoadingPlaces() {
    return this.placesService.isloadinPlaces
  }

  get places(): Feature[] {
    return this.placesService.places
  }


  flyToPosition(item: Feature) {
    this.selectedId  = item.id
    const position: LngLatLike = {lat: item.center[1], lng: item.center[0]}
    this.mapService.goToLocation(position)

  }

}
