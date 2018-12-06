import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MapsComponent } from './maps/maps.component'
import { BrowserModule } from '@angular/platform-browser'
import { AgmCoreModule } from '@agm/core'
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material'
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    //MatSelectModule,
    FormsModule,
    BrowserModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBulEdkZCSFbhlGVcjrZqOo95Ks5cirpuY'
    })
  ],
  declarations: [ MapsComponent ],
  bootstrap: [ MapsComponent ]
})
export class MapsModule { }
