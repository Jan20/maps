import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import * as firebase from 'firebase/app'
import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs'
import { User } from '../interfaces/user'
import { Subject } from 'rxjs'

@Injectable()
export class UserService {
  
  ///////////////
  // Variables //
  ///////////////
  public user: User = {uid: '', email:'', photoURL:'', displayName: ''}

  //////////////
  // Subjects //
  //////////////
  public userSubject: Subject<User> = new Subject<User>()

  //////////////////
  // Constructors //
  //////////////////
  constructor(
    
    private angularFireAuth: AngularFireAuth,
    private angularFireStore: AngularFirestore,
    private router: Router
  
  ) {
  
    this.userSubject.next(this.user)

    this.angularFireAuth.authState.subscribe(user => {
  
      console.log(user)
      if (user) {
  
        return this.angularFireStore.doc<User>(`users/${user.uid}`).valueChanges().subscribe(user => {
          
          this.user = user
          this.userSubject.next(user)
            
        })
  
      } else {
  
        // return Observable.of(null)
  
      }
    })
  }

  ///////////////
  // Functions // 
  ///////////////
  public googleLogin() {
  
    return this.oAuthLogin(new firebase.auth.GoogleAuthProvider())
  
  }

  private oAuthLogin(provider) {
  
    return this.angularFireAuth.auth.signInWithPopup(provider).then(credential => {

      const user: User = {

        uid: credential.user.uid,
        email: credential.user.email,
        photoURL: credential.user.photoURL,
        displayName: credential.user.displayName

      }

      console.log('_______________________________')
      console.log(user)

      this.updateUserData(user)
      this.user = user
      this.userSubject.next(user)

    })

  }

  private updateUserData(user: User) {
    
    const ref: AngularFirestoreDocument<User> = this.angularFireStore.doc(`users/${user.uid}`)
    
    ref.set(user, { merge: true })
  
  }

  public signOut() {
    
    this.user = null
    this.userSubject.next({uid: '', email: ''})
    this.angularFireAuth.auth.signOut().then( () => this.router.navigate(['/']))
  
  }

}
