import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {


  ///////////////
  // Variables //
  ///////////////

  // google maps zoom level
  public zoom: number = 8 
 
   // initial center position for the map
  public lat: number = 51.673858;
  public lng: number = 7.815982;

  //////////////////
  // Constructors //
  //////////////////
  public constructor() {


  }

  ngOnInit(): void {
  
    throw new Error("Method not implemented.");
  
  }

  ///////////////
  // Functions //
  ///////////////

  public clickedMarker(label: string, index: number) {
  
    console.log(`clicked the marker: ${label || index}`)
  
  }
  
  public mapClicked($event: any) {
  
    this.markers.push({
  
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
  
    });
  
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
   
    console.log('dragEnd', m, $event);
  
  }
  
  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]
}

// just an interface for type safety.
interface marker {

	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;

}
