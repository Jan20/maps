import { Component, OnInit } from '@angular/core'
import { MarkerService } from '../../marker/services/marker.service'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  ///////////////
  // Variables //
  ///////////////

  // google maps zoom level
  public zoom: number = 15

   // initial center position for the map
  public latitude: number = 0;
  public longitude: number = 0;
  //private icon: object = new google.maps.MarkerImage("http://maps.google.com/mapfiles/ms/micons/blue.png",
    //                    new google.maps.Size(32, 32), new google.maps.Point(0, 0),new google.maps.Point(16, 32));

  
    


  ///////////////
  // Variables //
  ///////////////
  markers: marker[] = [
	  // {
		//   lat: 51.673858,
		//   lng: 7.815982,
		//   label: 'S',
    //   draggable: true,
    //   icon: './assets/deer.png'
	  // },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'T',
      draggable: true,
      icon: '//developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'

	  },
	  {
		  lat: 51.723858,
		  lng: 51.723858,
		  label: 'P',
      draggable: true,
      icon: '//developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
	  }
  ]

  // google maps zoom level

   // initial center position for the map
  //private icon: object = new google.maps.MarkerImage("http://maps.google.com/mapfiles/ms/micons/blue.png",
    //                    new google.maps.Size(32, 32), new google.maps.Point(0, 0),new google.maps.Point(16, 32));

  //////////////////
  // Constructors //
  //////////////////
  public constructor(

    private markerService: MarkerService

  ) {

    
  }

  ngOnInit(): void {

    this.markerService.fetchMarkers()
    this.markerService.markersSubject.subscribe(markers => {
      
      markers.forEach(marker => {

        this.markers.push({

          lat: marker.latitude,
          lng: marker.longitude,
          label: marker.story,
          draggable: true,
          icon: '//developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'

        })

      })

    })

    console.log('Hello')

    navigator.geolocation.getCurrentPosition(position => {
      console.log(position.coords)
      console.log(position.coords.longitude)
      this.longitude = position.coords.longitude
      this.latitude = position.coords.latitude

    });


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
      //icon: icon

    });

  }

  markerDragEnd(m: marker, $event: MouseEvent) {

    console.log('dragEnd', m, $event);

  }


}

// just an interface for type safety.
interface marker {

  lat: number;
	lng: number;
	label?: string;
	draggable?: boolean;
  icon?: string
}
