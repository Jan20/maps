import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MapComponent } from './map/map.component'
import { BrowserModule } from '@angular/platform-browser'
import { AgmCoreModule } from '@agm/core'
import { ToolbarModule } from '../toolbar/toolbar.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,AgmCoreModule.forRoot({
      apiKey: 'API KEY HERE'
    }),
    ToolbarModule,
  ],
  declarations: [ MapComponent ],
  bootstrap: [ MapComponent ]
})
export class MapModule { }
