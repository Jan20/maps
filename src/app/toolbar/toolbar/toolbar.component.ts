import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { MarkerService } from '../../shared/services/marker.service';
import { Marker } from '../../shared/interfaces/marker'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  ///////////////
  // Variables //
  ///////////////
  public showMarkerView: boolean = false
  public toolbarIsActive: boolean = false
  public title: string = ''
  public story: string = ''
  public markers: Marker[] = []

  //////////////////
  // FormControls //
  //////////////////
  public titleFormControl: FormControl = new FormControl()
  public storyFormControl: FormControl = new FormControl()

  constructor(

    private markerService: MarkerService

  ) { }

  ngOnInit() {


    this.titleFormControl.valueChanges.subscribe(title => this.title = title)
    this.storyFormControl.valueChanges.subscribe(story => this.story = story)


  }


  ///////////////
  // Functions //
  ///////////////
  public createMarker() {

    this.showMarkerView === true ? this.showMarkerView = false : this.showMarkerView = true
    this.showMarkerView === true ? this.toolbarIsActive = false : this.toolbarIsActive = true

  }

  public add(): void {

    const marker: Marker = {title: this.title, story: this.story }

    console.log(this.title)
    this.markerService.add(marker)
    
  }

  public cancel(): void {



  }

}

