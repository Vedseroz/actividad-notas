//esto es apra conectar los componentes con php

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Datos} from '../app/datos';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
      url:string="http://localhost:8666/"
  constructor(private servicio:HttpClient) {

   }

   GuardarDatos(notas:Array<Datos>):Observable<any>{
     console.log(notas);
     alert("Datos Guardados.")
    return this.servicio.post(`${this.url}guardar.php`,JSON.stringify(notas));         //enviar datos a un json 
   }

    RecibirDatos():Observable<any>{
      let notas = this.servicio.get(`${this.url}iniciar.php`);
      return notas;
    }

    EliminarDatos(nota:Array<Datos>):Observable<any>{
      return this.servicio.post(`${this.url}eliminar.php`,JSON.stringify(nota));
    }

}
