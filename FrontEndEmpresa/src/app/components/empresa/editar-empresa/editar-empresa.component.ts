import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from 'src/app/servicios/empresa.service';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent implements OnInit {

  ediEmpValidador: FormGroup = this.fb.group({
    'nit':['',[Validators.required]],
    'razonSocial': [Validators.required]
  });

  empresas: any;
  nit: string;
  razonSocial: string;
  id: any;

  constructor(private fb: FormBuilder, public servicio: EmpresaService, private _route: ActivatedRoute) {
    this.nit = "";
    this.razonSocial = "";

   }

  ngOnInit(): void {

    this.id = this._route.snapshot.paramMap.get('id');
    this.servicio.ObtenerEmpresaPorID(this.id).subscribe(

      data => {
        this.empresas = data;
        this.nit = this.empresas.nit
        this.razonSocial = this.empresas.razonSocial
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          alert("Error en el cliente: " + err.message)
        } else {
          alert("Error en el servidor: " + err.message)
        }
      }
    );
  }

  editar_empresa(){
    
    let router: Router;
    let empresa = {
      nit: this.ediEmpValidador.controls['nit'].value,
      razonSocial: this.ediEmpValidador.controls['razonSocial'].value,
    }

    this.servicio.ActualizarEmpresa(this.id,empresa).subscribe(
      data => {
        this.empresas = data;
        console.log(data);
        alert("Empresa modificada")
        router.navigate(['/listar-empresa']);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          alert("Error en el cliente: " + err.message)
        } else {
          alert("Error en el servidor: " + err.message)
        }
      }
    );
  }
}
