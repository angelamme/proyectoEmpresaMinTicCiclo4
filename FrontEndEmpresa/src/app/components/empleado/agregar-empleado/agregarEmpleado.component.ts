import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregarEmpleado.component.html',
  styleUrls: ['./agregarEmpleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

  nombres: string;
  apellidos: string;
  telefono: string;
  direccion: string;
  correo: string;
  fechaNacimiento: Date;
  sueldo: number;
  esDirectivo: boolean;
  razonSocial: string;
  listaEmpresas: string[] = ["prueba 1", "prueba 2", "prueba 3"];
  constructor() { 
    this.nombres="";
    this.apellidos="";
    this.telefono="";
    this.direccion="";
    this.correo="";
    this.fechaNacimiento=new Date();
    this.sueldo=0;
    this.esDirectivo=false;
    this.razonSocial="";
  }

  ngOnInit(): void {
  }

  Agregar(){
    console.log("Agregar empleado");
  }
  Volver(){
    console.log("Volver de Agregar empleado");
  }

}
