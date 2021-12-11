import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-empresa',
  templateUrl: './agregar-empresa.component.html',
  styleUrls: ['./agregar-empresa.component.css']
})
export class AgregarEmpresaComponent implements OnInit {

agrEmpValidador: FormGroup = this.fb.group({
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

  agregar_empresa(){
    alert("Método agregar empresa ejecutado!")
  }
}