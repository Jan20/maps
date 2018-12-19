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
import { MenuModule } from './menu/menu.module'
import { UserModule } from './user/user.module'
import { MapModule } from './map/map.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { AngularFireModule } from 'angularfire2';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { SharedModule } from './shared/shared.module'
import { FriendModule } from './friend/friend.module'
import { MarkerModule } from './marker/marker.module'



@NgModule({

  declarations: [

    AppComponent,

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
    MapModule,
    ToolbarModule,
    BrowserModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    SharedModule,
    FriendModule,
    MarkerModule,

  ], providers: [

    {provide: APP_BASE_HREF, useValue : '/' }

  ], bootstrap: [

    AppComponent

  ]
})
export class AppModule { }
