import { Component, OnInit } from '@angular/core';
import { Feature } from '../interfaces/feature'
import { ToolbarService } from '../services/toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  public activeFeature: Feature = {id: 0} 

  public features: Feature[] = [

    {id: 1, description: 'Add Marker', icon: 'location_on', selector: 'app-marker'},
    {id: 2, description: 'Find Friends', icon: 'people', selector: 'app-friend'}

  ]


  //////////////////
  // Constructors //
  //////////////////
  constructor(

    private toolbarService: ToolbarService

  ) { }

  ngOnInit() {

    this.toolbarService.toolbarSubject.subscribe(activeFeature => {
      
      this.activeFeature = activeFeature})

  }


  ///////////////
  // Functions //
  ///////////////
  public selectFeature(id: number): void {

    this.features.forEach(feature => {

      feature.id === id ? this.activeFeature = feature : null

    })

  }


  public cancel(): void {

    this.toolbarService.toolbarSubject.next({id: 0})

  }

}

