import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { tap } from 'rxjs/operators';
import { UserService } from '../../user/user-service/user.service'

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  constructor(
    
    private userService: UserService,
    private angularFireStorage: AngularFireStorage, 
    private angularFirestore: AngularFirestore
  
  ) { }

  
  public toggleHover(event: boolean): void {

    this.isHovering = event;

  }


  public startUpload(event: FileList) {
    
    // The File object
    const file = event.item(0)

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') { 
      console.error('unsupported file type :( ')
      return;
    }

    // The storage path
    const path = `${this.userService.user.uid}/images/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'My AngularFire-powered PWA!' };

    // The main task
    const task: AngularFireUploadTask = this.angularFireStorage.upload(path, file, { customMetadata })

    // Progress monitoring
    const percentage: Observable<number> = task.percentageChanges();

    const snapshot = task.snapshotChanges().pipe(
      
      tap(snap => {
      
        if (snap.bytesTransferred === snap.totalBytes) {
          
          // Update firestore on completion
          this.angularFirestore.collection(`users/${this.userService.user.uid}/marker`).add( { path, size: snap.totalBytes })

        }
      
      })
    )

    // The file's download URL
    // this.downloadURL = this.task(); 
  }

  // Determines if the upload task is active
  public isActive(snapshot) {
  
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  
  }

}
