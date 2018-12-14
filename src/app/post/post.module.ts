import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImageUploadService } from './services/image-upload.service';
import { DropZoneDirective } from './directives/drop-zone.directive';
import { FileSizePipe } from './pipes/file-size.pipe';
import { AngularFireStorageModule } from 'angularfire2/storage';

@NgModule({
  imports: [
    
    CommonModule,
    AngularFireStorageModule
  
  ],
  declarations: [

    ImageUploadComponent, DropZoneDirective, FileSizePipe

  ], 
  providers: [

    ImageUploadService

  ]
})
export class PostModule { }
