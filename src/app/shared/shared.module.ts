import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { GenericService } from './services/generic-service'
import { MarkerService } from './services/marker.service'

@NgModule({
  imports: [

    CommonModule,

  ],
  declarations: [
    
  
  ], providers: [

    GenericService,
    MarkerService

  ], exports: [

  ]
})
export class SharedModule { }
