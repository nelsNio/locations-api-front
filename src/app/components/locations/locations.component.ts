import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../../services/locations.service';
import { Locations } from '../../interfaces/locations';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  public locations: Array<Locations>= [];
  constructor(private locationsService:LocationsService) { }

  ngOnInit(): void {
    this.locationsService.getLocations().subscribe(
      locations=>{
        console.log(locations);
        this.locations=locations;
      })
  }

}
