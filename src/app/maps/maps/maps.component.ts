import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
//import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng }
import * as firebase from 'firebase';


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
  public mapTypeId: string = "TERRAIN";


  //////////////////
  // Constructors //
  //////////////////
  public constructor() {}

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
      draggable: true,
      iconUrl: {
                url: 'http://maps.google.com/mapfiles/ms/micons/blue.png',
                scaledSize: {
                    width: 30,
                    height: 30
                }
            }
    });

  }

  markerDragEnd(m: marker, $event: MouseEvent) {

    console.log('dragEnd', m, $event);

  }


  saveNewMarker(newMarker: NgForm): void {

    newMarker = newMarker.value;




  }


  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'M',
		  draggable: true
	  },
  ]



} // MapsCompnenrt

// just an interface for type safety.
interface marker {

	lat: number;
	lng: number;
	label?: string;
	draggable?: boolean;
  iconUrl?:  object;
}


interface marker {

	lat: number;
	lng: number;
	label?: string;
	draggable?: boolean;
  iconUrl?:  object;
}
