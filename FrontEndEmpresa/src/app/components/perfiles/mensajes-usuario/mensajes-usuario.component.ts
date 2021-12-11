import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CredencialesModel } from 'src/app/Modelos/credenciales.model';
import { ModelMensajeCliente } from 'src/app/Modelos/mensaje-cliente.model';
import { ModelMensajeEmpleado } from 'src/app/Modelos/mensaje-empleado.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-mensajes-usuario',
  templateUrl: './mensajes-usuario.component.html',
  styleUrls: ['./mensajes-usuario.component.css']
})
export class MensajesUsuarioComponent implements OnInit {

  subs: Subscription = new Subscription();
  
  listaMensajesCliente: ModelMensajeCliente[]=[];
  listaMensajesEmpleado: ModelMensajeEmpleado[]=[];

  idUsuario?:string;
  rol?:string;

  constructor(private servicioSeguridad: SeguridadService) { }

  ngOnInit(): void {
    this.subs = this.servicioSeguridad.ObtenerDatosUsuarioSesion().subscribe((datos:CredencialesModel)=>{
      this.idUsuario = datos.data?.id;
      this.rol=datos.rol;
    });
    if(this.rol=="Cliente"){
     //llenar la lista de los mensajes cliente
     
     return;
    }
    if(this.rol=="Empleado"){
      //lenar la lista de los menasajes empleado

      return;
    }
  }

}
