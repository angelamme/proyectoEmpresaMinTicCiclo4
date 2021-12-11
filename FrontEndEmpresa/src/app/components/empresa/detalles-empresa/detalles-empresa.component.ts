import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles-empresa',
  templateUrl: './detalles-empresa.component.html',
  styleUrls: ['./detalles-empresa.component.css']
})
export class DetallesEmpresaComponent implements OnInit {

  nit: string;
  razonSocial: string;

  constructor() {
    this.nit = "";
    this.razonSocial = "";
   }

  ngOnInit(): void {
  }

}
