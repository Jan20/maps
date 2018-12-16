import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkerComponent } from './marker-component/marker.component';
import { MarkerService } from './services/marker.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MaterialModule } from '../config/material.module';
import { DropZoneDirective } from './directives/drop-zone.directive';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileSizePipe } from './pipes/file-size.pipe';

@NgModule({
  declarations: [
    
    MarkerComponent,
    
    DropZoneDirective,
    
    FileUploadComponent,
    
    FileSizePipe
  
  ],
  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MaterialModule,
    
  ],
  providers: [

    MarkerService

  ],
  exports: [

    MarkerComponent

  ],
})
export class MarkerModule { }
