import { Routes } from '@angular/router';
import { UserLoginComponent } from './../user/user-login/user-login.component';
import { MapComponent } from './../map/map/map.component'

// Routing
export const ROUTES: Routes = [

  { path: '', component: MapComponent },


  { path: 'user', component: UserLoginComponent },

]