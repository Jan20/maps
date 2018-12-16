import { Component, OnInit } from '@angular/core';
import { MarkerService } from '../services/marker.service';
import { FormControl } from '@angular/forms';
import { Marker } from '../interfaces/marker';
import { ToolbarService } from '../../toolbar/services/toolbar.service';


@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss']
})
export class MarkerComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  public title: string = ''
  public story: string = ''
  public markers: Marker[] = []

  //////////////////
  // FormControls //
  //////////////////
  public titleFormControl: FormControl = new FormControl()
  public storyFormControl: FormControl = new FormControl()


  constructor(

    private markerService: MarkerService,
    private toolbarService: ToolbarService

  ) { }

  ngOnInit() {

    this.titleFormControl.valueChanges.subscribe(title => this.title = title)
    this.storyFormControl.valueChanges.subscribe(story => this.story = story)

  }


  public createMarker() {

    this.toolbarService.toolbarSubject.next(null)

  }

  public add(): void {

    const marker: Marker = {title: this.title, story: this.story }

    console.log(this.title)
    this.markerService.add(marker)
    
  }


}
