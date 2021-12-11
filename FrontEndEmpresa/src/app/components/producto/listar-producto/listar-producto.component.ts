import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelProducto } from 'src/app/Modelos/producto.model';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  listaProductos: ModelProducto[]=[];

  constructor(private productoServicio:ProductoService, private router: Router) { }

  ngOnInit(): void {
    this.ObtenerListaProductos();
  }

  ObtenerListaProductos(){
    this.productoServicio.ObtenerProductos().subscribe((datos: ModelProducto[])=>{
      this.listaProductos = datos;
    });
  }

  EliminarProducto(id: string){
    console.log("se va a eliminar");
    console.log(id);
    this.productoServicio.EliminarProducto(id).subscribe((data:any)=>{
      console.log("Eliminacion correcta");
      console.log(data)
      alert("Producto eliminado correctamente");
    },(error:any)=>{
      console.log(error);
      alert("Ocurrio un error al eliminar el producto");
    });
    this.router.navigate(['listar-producto']);
  }

}
