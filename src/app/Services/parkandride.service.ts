import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../Models/parking';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParkandrideService {
  private _url1: string =
    'https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek5/MapServer/566/query?where=1%3D1&outFields=OBJECTID,Naam,Gemeente,Postcode,Tramlijnen,Buslijnen,Longitude,Latitude&outSR=4326&f=json';

  constructor(private http: HttpClient) {}

  getParkings(): Observable<RootObject> {
    return this.http.get<RootObject>(this._url1);
  }
}
