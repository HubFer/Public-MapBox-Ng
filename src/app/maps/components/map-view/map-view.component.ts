import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MapServicesService, PlacesService } from '../../services';
import { Map, Popup, Marker } from 'mapbox-gl';
// import { Map as MapLibre } from 'maplibre-gl';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapContainer') mapContainer!: ElementRef<HTMLInputElement>

  constructor(private places: PlacesService,
              private mapService: MapServicesService) {
  
   }

   //The DOM should be initialized first
  ngAfterViewInit(): void {
    const map = new Map({
        container: this.mapContainer.nativeElement, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [this.places.userLocation?.long!, this.places.userLocation?.lat!], // starting position [lng, lat]
        zoom: 14, // starting zoom
    });

    const popup = new Popup()
    .setHTML(`<h6> My Location</h6>
              <span> This is my current Location</span>`)

    const marker = new Marker({color: 'red'})
    .setLngLat({lat: this.places.userLocation?.lat!, lon: this.places.userLocation?.long!})
    .setPopup(popup)
    .addTo(map)

    this.mapService.setMap = map
    
  }

  ngOnInit(): void {
    console.log(this.places.userLocation)
  }


}
