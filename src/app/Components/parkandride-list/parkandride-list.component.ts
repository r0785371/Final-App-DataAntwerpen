import { Component, OnInit, ViewChild } from '@angular/core';
import { ParkandrideService } from 'src/app/Services/parkandride.service';
import { Feature } from 'src/app/Models/parking';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-parkandride-list',
  templateUrl: './parkandride-list.component.html',
  styleUrls: ['./parkandride-list.component.scss'],
})
export class ParkandrideListComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;
  public parkings: Feature[] = [];
  markers = [];
  infoContent = '';

  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 20,
    minZoom: 8,
  };

  constructor(private _parkandrideService: ParkandrideService) {}

  ngOnInit(): void {
    this._parkandrideService
      .getParkings()
      .subscribe((data) => this.addMarker((this.parkings = data.features)));

    // navigator.geolocation.getCurrentPosition((position) => {
    //   this.center = {
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude,
    //   };
    // });
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }

  click(event: google.maps.MouseEvent) {
    console.log(event);
  }

  addMarker(parkings: Feature[]) {
    for (let index = 0; index < parkings.length; index++) {
      const element = parkings[index];

      console.log(element);

      this.markers.push({
        position: {
          lat: element.attributes.Latitude,
          lng: element.attributes.Longitude,
        },
        // label: {
        //   fontSize: '18px',
        //   color: 'white',
        //   text: element.attributes.Naam,
        // },
        title: element.attributes.Naam,
        options: { animation: google.maps.Animation.DROP },
      });

      if (index === 0) {
        this.center = {
          lat: element.attributes.Latitude,
          lng: element.attributes.Longitude,
        };
      }
    }
  }

  openInfo(marker: MapMarker, content) {
    console.log(marker);
    this.infoContent = content;
    this.info.open(marker);
  }
}
