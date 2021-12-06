import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-empresa',
  templateUrl: './agregar-empresa.component.html',
  styleUrls: ['./agregar-empresa.component.css']
})
export class AgregarEmpresaComponent implements OnInit {

  nit: string;
  razonSocial: string;

  constructor() {
    this.nit = "";
    this.razonSocial = "";
   }

  ngOnInit(): void {
  }

  agregar_empresa(){
    alert("Método agregar empresa ejecutado!")
  }
}