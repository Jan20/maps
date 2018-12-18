import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

// Services
import { UserService } from '../user-service/user.service';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../user-model/user';
import { Router } from '@angular/router';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
//import { environment } from '../environments/environment';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  public user: User = new User('', '', '', '')

  //////////////////
  // Constructors //
  //////////////////
  constructor(

    public userService: UserService,
    public router: Router,

  ) {}

  public async ngOnInit(): Promise<void> {

    await this.userService.getUser().then(user => this.user = user)

  }

  public switchToAdmin(): void {

    this.router.navigate(['admin/markets'])

  }

  /*public googleLogin(): void {

    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)

                 .then(result =>{
                      const user = result.user;
                      console.log(user)
                 })
                 .catch(console.log)

  }*/

}
