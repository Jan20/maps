import { Component, Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireStorage } from 'angularfire2/storage';
import { FirebaseFirestore } from 'angularfire2';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

 
  task: any
  state: any;
  uploading: Observable<Boolean>;
  success: Observable<Boolean>;
  percentage: Observable<number>;

  constructor(private afAuth: AngularFireAuth, private storage: AngularFireStorage) {  }

  upload(event) {
    const file = event.srcElement.files[0];

    this.task = this.storage.upload(`/uploads/${file.name}`, file, {
      customMetadata: {
        uid: this.afAuth.auth.currentUser.uid
      }
    });

    this.state = this.task.map(s => s.state);
    this.uploading = this.state.map(s => s === firebase.storage.TaskState.RUNNING);
    this.success = this.state.map(s => s === firebase.storage.TaskState.SUCCESS);
    this.percentage = this.task.map(s => s.bytesTransferred / s.totalBytes * 100);
  }
  
  pause(event) {
    this.task.pause();
  }

  resume(event) {
    this.task.resume();
  }

  cancel(event) {
    this.task.cancel();
  }

}
