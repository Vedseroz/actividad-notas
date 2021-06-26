import { Component, OnInit } from '@angular/core';
import {Datos} from '../datos';
import{Observable} from 'rxjs';
import {ServicioService} from "../servicio.service";
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})

export class DisplayComponent implements OnInit {

  
  constructor(private servicio:ServicioService) {
   }


  ngOnInit(): void {
    this.AlmacenarDatos();
  }

  
  notas_abiertas:Array<Datos> = [];       //inicializado
  notas_enprogreso: Array<Datos> = [];
  notas_cerradas: Array<Datos> = [];

  AlmacenarDatos(){
    
    this.servicio.RecibirDatos().subscribe(datos=>{

        this.notas_abiertas = datos[0];
        this.notas_enprogreso = datos[1];
        this.notas_cerradas = datos[2];
        console.log(this.notas_abiertas);
        console.log(this.notas_enprogreso);
        console.log(this.notas_cerradas);

    });
    
  }
  eliminarDatos(notas:Array<Datos>) {
    this.servicio.EliminarDatos(notas).subscribe(datos => {});
    window.location.reload();

  }

  

}
