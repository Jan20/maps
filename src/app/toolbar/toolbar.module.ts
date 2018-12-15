import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar-component/toolbar.component';
import { MaterialModule } from '../config/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FriendModule } from '../friend/friend.module'
import { MarkerModule } from '../marker/marker.module';
import { ToolbarService } from './services/toolbar.service'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,  
    MatAutocompleteModule,
    FormsModule,
    FriendModule,
    MarkerModule,

  ],
  declarations: [
    
    ToolbarComponent, 
  
  ],
  providers: [

    ToolbarService

  ],
  exports: [

    ToolbarComponent, 


  ]
})
export class ToolbarModule { }
