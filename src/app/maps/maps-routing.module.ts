import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MapScreenComponent } from './pages/map-screen/map-screen.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [

  { path:'main-page', //this is pages routes
  pathMatch: 'full',
  component: MainPageComponent,
  },

  { path:'map-view', //this is pages routes
    pathMatch: 'full',
    component: MapScreenComponent,
  },

  {path:'**', redirectTo: 'main-page'}
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MapsRoutingModule { }
