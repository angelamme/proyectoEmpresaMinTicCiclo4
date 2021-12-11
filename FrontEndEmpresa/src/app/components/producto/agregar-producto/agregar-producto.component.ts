import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelProducto } from 'src/app/Modelos/producto.model';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'valor': ['', [Validators.required, Validators.min(0)]],
    'descripcion': ['', [Validators.required]]
  }
  );
  
  constructor(private fb: FormBuilder, 
    private ServicioProducto: ProductoService,
    private router:Router) { }

  ngOnInit(): void {
  }

  Agregar(){
    let producto = new ModelProducto();
    producto.nombre = this.fgValidador.controls["nombre"].value;
    producto.valorUnitario = parseInt(this.fgValidador.controls["valor"].value);
    producto.descripcion = this.fgValidador.controls["descripcion"].value;
    producto.empresaId = "61a5745724a6402a80cbf33e";
    this.ServicioProducto.CrearProducto(producto).subscribe((datos:ModelProducto)=>{
      alert("Producto almacenado correctamente");
      this.router.navigate(["/listar-producto"]);
    }, (error:any)=>{
      alert("Ocurrio un error al almacenar el producto");
      console.log(error);
    });

  }

}
