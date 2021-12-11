import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CredencialesModel } from 'src/app/Modelos/credenciales.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.component.html',
  styleUrls: ['./cambiar-clave.component.css']
})
export class CambiarClaveComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'claveActual': ['', [Validators.required]],
    'password': ['', [Validators.required]]
  }
  );
  
  subs: Subscription = new Subscription();

  constructor(private fb: FormBuilder, 
    private ServicioSeguridad: SeguridadService) { }

  ngOnInit(): void {
    this.fb.group({
      'claveActual': [''],
      'password': ['']
    }
    );
  }

  Cambiar(){
    this.subs = this.ServicioSeguridad.ObtenerDatosUsuarioSesion().subscribe((datos:CredencialesModel)=>{
      if(datos.identificado){
        if(datos.rol=="Empleado"){
          this.CambiarClaveEmpleado();
        }
        if(datos.rol=="Cliente"){
          this.CambiarClaveEmpleado();
        }
      }
    });
  }

  CambiarClaveCliente(){
    //obtener clave actual del cliente

    //comparar con la clave actual del input

    //si es igual actualizar la clave del cliente

    //si no mostrar mensaje de error
  }

  CambiarClaveEmpleado(){
    
  }

}
