import { Injectable } from '@angular/core';
import { User } from '../../user/interfaces/user';
import { AngularFirestore } from 'angularfire2/firestore';
import { UserService } from '../../user/user-service/user.service';
import { Marker } from '../interfaces/marker'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  ///////////////
  // Variables //
  ///////////////
  private user: User

  //////////////
  // Subjects //
  //////////////
  // public entrySubject: Subject<Entry> = new Subject<Entry>()
  public markersSubject: Subject<Marker[]> = new Subject<Marker[]>()
  // public selectSubject: Subject<Entry> = new Subject<Entry>()

  //////////////////
  // Constructors //
  //////////////////
  constructor(
  
    private angularFirestore: AngularFirestore,
    private userService: UserService,
  
  ) {}

  ///////////////
  // Functions //
  ///////////////
  // public async fetchEntry(languageId: string, stageId: string, topicId: string, entryId: string): Promise<void> {

  //   await this.userService.getUser().then(user => this.user = user)
  //   this.angularFirestore.doc<Entry>(`/users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics/${topicId}/entries/${entryId}`).valueChanges().subscribe(entry => this.entrySubject.next(entry))

  // }
  
  public async fetchMarkers(): Promise<void> {

    this.userService.userSubject.subscribe(user => {

      this.angularFirestore.collection<Marker>(`/users/${user.uid}/markers/`).valueChanges().subscribe(markers => this.markersSubject.next(markers))

    })

  }

  public async add(marker: Marker): Promise<void> {
    
    const date: number = new Date().getTime()

    marker.date = date

    if (navigator.geolocation === undefined || navigator.geolocation === null) {

      marker.latitude = 0
      marker.longitude = 0

    } else {
      
      navigator.geolocation.getCurrentPosition(async position => {

        marker.longitude = position.coords.longitude
        marker.latitude = position.coords.latitude
  
        console.log(marker)
  
        this.angularFirestore.collection(`/users/${this.userService.user.uid}/markers`).add(marker)
  
      });

    }

    

  }


  // public async update(languageId: string, stageId: string, topicId: string, entry: Entry): Promise<void> {

  //   await this.userService.getUser().then(user => this.user = user)
  //   this.angularFirestore.doc<any>(`users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics/${topicId}/entries/${entry.entryId}`).delete()
  //   const entryId = entry.native.toLowerCase()
  //   const newEntry: any = {entryId: entryId, native: entry.native, foreign: entry.foreign, score: entry.score}
  //   this.angularFirestore.collection<Entry>(`/users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics/${topicId}/entries`).doc(entryId).set(newEntry)

  // }

  // public async changeScore(languageId: string, stageId: string, topicId: string, entry: Entry): Promise<void> {

  //   this.angularFirestore.doc<any>(`users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics/${topicId}/entries/${entry.entryId}`).update({score:entry.score})

  // } 

  // public async delete(languageId: string, stageId: string, topicId: string, entryId: string): Promise<void> {

  //   await this.userService.getUser().then(user => this.user = user)
  //   this.angularFirestore.doc<any>(`users/${this.user.userId}/languages/${languageId}/stages/${stageId}/topics/${topicId}/entries/${entryId}`).delete()

  // }
}
