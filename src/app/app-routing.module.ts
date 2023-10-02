import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'pages' , loadChildren: () => import('../app/maps/maps.module').then(m=>m.MapsModule) },
  { path: '', pathMatch: 'full', redirectTo: 'pages'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
