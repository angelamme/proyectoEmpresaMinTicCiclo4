import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ModelCliente } from 'src/app/Modelos/cliente.model';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})

export class ListarClienteComponent implements OnInit {

  listadoCliente: ModelCliente[] = [];

  constructor(private clienteServicio: ClienteService,
    private router:Router) { }

  ngOnInit(): void {
    this.ObtenerListadocliente();
  }

  ObtenerListadocliente(){
    this.clienteServicio.ObtenerClientes().subscribe((datos: ModelCliente[]) => {
      this.listadoCliente = datos;
    })
  }

  EliminarCliente(id: string){
    this.clienteServicio.EliminarCliente(id).subscribe((data:any)=>{
      alert("El Cliente fue eliminado correctamente");
    },(error:any)=>{
      console.log(error);
      alert("Error al eliminar el cliente");
    });
    // this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: false }).then(() => {
    //   this.router.navigate(['/listar-cliente']);
    // });
    //this.router.navigate(['/listar-cliente']);
    this.ngOnInit();
    //this.ObtenerListadocliente();
  }

}
