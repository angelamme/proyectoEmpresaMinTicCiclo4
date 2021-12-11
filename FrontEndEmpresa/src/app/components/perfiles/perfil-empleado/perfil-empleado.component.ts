import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-perfil-empleado',
  templateUrl: './perfil-empleado.component.html',
  styleUrls: ['./perfil-empleado.component.css']
})
export class PerfilEmpleadoComponent implements OnInit {

  editar: boolean = false;
  cantidadPedidos:number=0;
  fgValidador: FormGroup = this.fb.group({
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'fechaNacimiento': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'correo': ['', [Validators.required, Validators.email]],
    'sueldo': ['', [Validators.required, Validators.min(0)]],
  }
  );
  subs: Subscription = new Subscription();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  Editar(){
    this.editar=true;
  }

  GuardarCambios(){
    //agregar logica de guardar
    this.editar=false;
  }
  CancelarEditar(){
    this.editar=false;
  }

}
