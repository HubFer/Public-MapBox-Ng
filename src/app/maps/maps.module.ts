import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './pages/map-screen/map-screen.component';
import { MapsRoutingModule } from './maps-routing.module';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BtnMylocationComponent } from './components/btn-mylocation/btn-mylocation.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SearchresultsComponent } from './components/searchresults/searchresults.component';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page/main-page.component';



@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    LoadingComponent,
    BtnMylocationComponent,
    SearchbarComponent,
    SearchresultsComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    FormsModule, 
  ]
})
export class MapsModule { }
