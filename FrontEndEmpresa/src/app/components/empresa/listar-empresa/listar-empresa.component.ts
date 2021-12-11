import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-empresa',
  templateUrl: './listar-empresa.component.html',
  styleUrls: ['./listar-empresa.component.css']
})
export class ListarEmpresaComponent implements OnInit {

  listaEmpresas: string[];

  constructor() { 

    this.listaEmpresas = ["Empresa1","Empresa2","Empresa3","Empresa4","Empresa5"];
  }

  ngOnInit(): void {
  }

}
