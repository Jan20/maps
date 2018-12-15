import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user-service/user.service'
import { User } from '../../user/interfaces/user';
import { Friend } from '../interfaces/friend';
import { FriendsService } from '../services/friend.service';


@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  public users: User[] = []

  constructor(

    private userService: UserService,
    private friendsService: FriendsService

  ) { }

  ngOnInit() {

    this.userService.usersSubject.subscribe(users => this.users = users)
    this.userService.fetchUsers()

  }

  ///////////////
  // Functions //
  ///////////////
  public addFriend(uid: string): void {

    console.log(uid)
    this.friendsService.addFriend(uid)

  }

}
