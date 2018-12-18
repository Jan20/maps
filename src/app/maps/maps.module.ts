import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MapsComponent } from './maps/maps.component'
import { BrowserModule } from '@angular/platform-browser'
import { AgmCoreModule } from '@agm/core'
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material'
import { FormsModule }   from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
//import { environment } from './app/environments/environment';
import { googleMapsApiKey } from '../config/google-maps-api-key';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    //MatSelectModule,
    FormsModule,
    AngularFireDatabaseModule,
    BrowserModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD3nN5f229trOnzRgAasfgFdW7qJbwhggw'
    })
  ],
  declarations: [ MapsComponent ],
  bootstrap: [ MapsComponent ]
})
export class MapsModule { }
