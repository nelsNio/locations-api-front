import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { LocationModel } from '../../models/location.model';

import Swal from 'sweetalert2';
import { LocationsService } from '../../services/locations.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  location: LocationModel = new LocationModel();


  constructor( private locationsService: LocationsService,
               private route: ActivatedRoute,private router:Router ) { }

  ngOnInit() {


  }

  guardar( form: NgForm ) {

    if ( form.invalid ) {
      Swal.fire(
        'Espere!',
        'Error de información',
        'error',
     );
     
      return;
    }

    Swal.fire(
       'Espere!',
       'Guardando información',
       'success',
    );
    Swal.showLoading();
    Swal.close();

    let peticion: Observable<any>;

    peticion = this.locationsService.createLocation( this.location );
    peticion.subscribe( resp => {
      
      Swal.fire(
         this.location.name,
         'Se creó correctamente',
         'success'
      );
      this.router.navigateByUrl('/locations');

    }, (error) => {
      console.log(error.error.mensaje);
      Swal.fire(
        'Error de registro!',
        error.error.mensaje,
        'error'
      )
      
       


      }
    );



  }

}
