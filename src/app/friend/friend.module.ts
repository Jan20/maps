import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendComponent } from './friend-component/friend.component';
import { FriendsService } from './services/friend.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MaterialModule } from '../config/material.module';

@NgModule({
  declarations: [
    
    FriendComponent
  ],
  imports: [
  
    MatAutocompleteModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule
  
  ],
  providers: [

    FriendsService

  ],
  exports: [

    FriendComponent

  ]
})
export class FriendModule { }
