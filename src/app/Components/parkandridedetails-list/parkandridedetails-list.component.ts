import { Component, OnInit } from '@angular/core';
import { ParkandrideService } from 'src/app/Services/parkandride.service';
import { Feature } from 'src/app/Models/parking';

@Component({
  selector: 'app-parkandridedetails-list',
  templateUrl: './parkandridedetails-list.component.html',
  styleUrls: ['./parkandridedetails-list.component.scss'],
})
export class ParkandridedetailsListComponent implements OnInit {
  public parkings: Feature[] = [];

  constructor(private _parkandrideService: ParkandrideService) {}

  ngOnInit(): void {
    this._parkandrideService
      .getParkings()
      .subscribe((data) => (this.parkings = data.features));
  }
}
