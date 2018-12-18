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
import { ProfileComponent } from './profile/profile.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
//import { environment } from '../environments/environment';



@NgModule({

  declarations: [

    AppComponent,
    LefSideControlsComponent,
    ProfileComponent,

  ], imports: [

    MaterialModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    Ng2GoogleChartsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ConfigModule,
    UserModule,
    MenuModule,
    LandingModule,
    MapsModule,
    //AngularFireModule.initializeApp(environment.firebase, 'maps'),
    AngularFireDatabaseModule,

  ], providers: [

    {provide: APP_BASE_HREF, useValue : '/' }

  ], bootstrap: [

    AppComponent

  ]
})
export class AppModule { }
//export class PizzaPartyAppModule { }
