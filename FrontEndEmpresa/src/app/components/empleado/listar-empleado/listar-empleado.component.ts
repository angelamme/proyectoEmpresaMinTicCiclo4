import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelEmpleado } from 'src/app/Modelos/empleado.model';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {

  listaEmpleados: ModelEmpleado[]=[];

  constructor(private empleadoServicio:EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    this.ObtenerListaEmpleados();
  }

  ObtenerListaEmpleados(){
    this.empleadoServicio.ObtenerEmpleados().subscribe((datos: ModelEmpleado[])=>{
      this.listaEmpleados = datos;
    });
  }

  EliminarEmpleado(id: string){
    console.log("se va a eliminar");
    console.log(id);
    this.empleadoServicio.EliminarEmpleado(id).subscribe((data:any)=>{
      console.log("Eliminacion correcta");
      console.log(data)
      alert("Empleado eliminado correctamente");
    },(error:any)=>{
      console.log(error);
      alert("Ocurrio un error al eliminar el empleado");
    });
    this.router.navigate(['inicio']);
  }


}
