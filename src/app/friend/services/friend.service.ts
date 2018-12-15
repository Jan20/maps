import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from '../../user/interfaces/user';
import { UserService } from '../../user/user-service/user.service';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(    
    
    private userService: UserService,
    private angularFirestore: AngularFirestore,

  ) { }

  ///////////////
  // Functions //
  ///////////////
  public addFriend(uid: string): void {

    console.log('______________________________-')
    console.log(uid)
    const ref = this.angularFirestore.collection(`users/${this.userService.user.uid}/friends`)

    ref.doc(`${uid}`).set({

      'uid': uid,

    })

  }

}
