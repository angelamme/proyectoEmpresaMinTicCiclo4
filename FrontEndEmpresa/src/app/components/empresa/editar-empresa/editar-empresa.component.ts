import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  nit: string;
  razonSocial: string;

  constructor(private fb: FormBuilder) {
    this.nit = "";
    this.razonSocial = "";
   }

  ngOnInit(): void {
  }

  editar_empresa(){
    alert("Método editar empresa ejecutado!")
  }
}
