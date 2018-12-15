import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MaterialModule } from '../config/material.module';
import { UserComponent } from './user-component/user.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserService } from './user-service/user.service';

@NgModule({
  imports: [ 

    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MaterialModule,

  ],
  declarations: [

    UserLoginComponent,
    UserComponent

  ],
  providers: [

    UserService,

  ],
  exports: [

    UserComponent

  ]
})
export class UserModule { }
