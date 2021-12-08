import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {

  nombres: string;
  apellidos: string;
  telefono: string;
  direccion: string;
  correo: string;
  fechaNacimiento: Date;
  razonSocial: string;
  listaEmpresas: string[] = ["prueba 1", "prueba 2", "prueba 3"];

  constructor() {
    this.nombres="";
    this.apellidos="";
    this.telefono="";
    this.direccion="";
    this.correo="";
    this.fechaNacimiento=new Date();
    this.razonSocial="";  
   }

  ngOnInit(): void {
  }
  Agregar(){
    console.log("Agregar cliente");
  }
  Volver(){
    console.log("Volver a agregar cliente");
  }

}
