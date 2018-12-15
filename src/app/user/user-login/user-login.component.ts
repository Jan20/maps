import { Component, OnInit } from '@angular/core';

// Services
import { UserService } from '../user-service/user.service';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  public user: User = {uid: '', email: '', photoURL: '', displayName: ''}

  //////////////////
  // Constructors //
  //////////////////
  constructor(

    public userService: UserService,
    public router: Router,

  ) {

    this.userService.userSubject.subscribe(user => this.user = user)

  }

  ngOnInit() {

    this.userService.user = this.user

    console.log(this.user)
    
    this.userService.userSubject.subscribe(user => {
      
      this.user = user
      console.log(this.user)
      
      this.user.uid !== '' ? this.switchToMainView() : null
    
    })
  
  }

  private switchToMainView(): void {

    this.router.navigate(['/'])

  }


}
