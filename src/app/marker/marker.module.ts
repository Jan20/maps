import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkerComponent } from './marker-component/marker.component';
import { MarkerService } from './services/marker.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MaterialModule } from '../config/material.module';

@NgModule({
  declarations: [
    
    MarkerComponent
  
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
