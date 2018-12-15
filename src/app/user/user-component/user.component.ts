import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../user-service/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user: User = {uid: '', email: ''}
  public userIsLoggedIn: boolean = false

  constructor(

    private router: Router,
    private userService: UserService

  ) { }

  ngOnInit() {

    this.userService.userSubject.subscribe(user => this.user = user)

  }


  ///////////////
  // Functions //
  ///////////////
  public navigateToUserLogin(): void {

    this.router.navigate(['/user'])

  }

}
