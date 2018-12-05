import { APP_BASE_HREF } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxChartsModule } from '@swimlane/ngx-charts'
import { Ng2GoogleChartsModule } from 'ng2-google-charts'
import { AppComponent } from './app.component'
import { ConfigModule } from './config/config.module'
import { MaterialModule } from './config/material.module'
import { LandingModule } from './landing/landing.module'
import { MenuModule } from './menu/menu.module'
import { UserModule } from './user/user.module'
import { MapsModule } from './maps/maps.module';
import { LefSideControlsComponent } from './lef-side-controls/lef-side-controls.component';

@NgModule({

  declarations: [

    AppComponent,

    LefSideControlsComponent,

  ], imports: [

    MaterialModule,
    BrowserModule,
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2GoogleChartsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ConfigModule,
    UserModule,
    MenuModule,
    LandingModule,
    MapsModule,

  ], providers: [

    {provide: APP_BASE_HREF, useValue : '/' }

  ], bootstrap: [

    AppComponent

  ]
})
export class AppModule { }
export class PizzaPartyAppModule { }
