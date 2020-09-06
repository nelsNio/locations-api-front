import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Locations } from '../interfaces/locations';
import { LocationModel } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  private api_url_endpoint : String = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getLocations():Observable<Locations[]>{
    return this.http.get<Locations>(this.api_url_endpoint+"locations/").pipe(
      map((response: any) =>{
        let locations = response.mensaje;
        return locations;
      })
    )
  }
  createLocation( location: LocationModel ) {

    return this.http.post(`${ this.api_url_endpoint }locations/`, location)
            .pipe(
              map( (resp: any) => {
                location.id = resp.mensaje.id;
                
                return location;
              })
            );

  }
}
