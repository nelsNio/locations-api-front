import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationsComponent } from './components/locations/locations.component';
import { LocationComponent } from './components/location/location.component';


const routes: Routes = [
  {path:'locations',component: LocationsComponent},
  {path:'location/new',component: LocationComponent},
  {path:'**',pathMatch:'full',redirectTo:'locations'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
