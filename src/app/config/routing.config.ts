import { Routes } from '@angular/router';
import { LandingOverviewComponent } from './../landing/landing-overview/landing-overview.component';
import { UserLoginComponent } from './../user/user-login/user-login.component';
import { MapsComponent } from './../maps/maps/maps.component'

// Routing
export const ROUTES: Routes = [

  { path: '', component: MapsComponent },
  // { path: 'markets/:marketId/assets/:assetId', component: AssetDetailsComponent },


  { path: 'user', component: UserLoginComponent },

]