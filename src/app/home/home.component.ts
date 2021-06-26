import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ServicioService} from '../servicio.service'
import {DisplayComponent} from '../display/display.component';
import {Datos} from '../datos'  //importando la interfce de los datos

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
 
  formulario:FormGroup;

  constructor(private fb:FormBuilder,private servicio:ServicioService){           //service es para conectar con el servicio de apache de xampp
      this.formulario=this.fb.group({
        titulo:['',[Validators.required]],
        estado:['',[Validators.required]],
        descripcion:['',[Validators.required]]
      })
  }

  ngOnInit(): void {                                                //al iniciar la clase.
      
  }

  EnviarDatos(){
    let notas:Array<Datos>=[{                                       //[] = object
      titulo:this.formulario.get('titulo')?.value,
      estado:this.formulario.get('estado')?.value,
      descripcion:this.formulario.get('descripcion')?.value
    }]

     return this.servicio.GuardarDatos(notas).subscribe(datos=>{}); //guardando los datos de las notas.

  }


}

