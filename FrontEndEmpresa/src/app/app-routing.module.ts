import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AgregarEmpresaComponent } from './components/empresa/agregar-empresa/agregar-empresa.component';
import { DetallesEmpresaComponent } from './components/empresa/detalles-empresa/detalles-empresa.component';
import { EditarEmpresaComponent } from './components/empresa/editar-empresa/editar-empresa.component';
import { ListarEmpresaComponent } from './components/empresa/listar-empresa/listar-empresa.component';
import { AgregarEmpleadoComponent } from './components/empleado/agregar-empleado/agregarEmpleado.component';
import { DetallesEmpleadoComponent } from './components/empleado/detalles-empleado/detalles-empleado.component';
import { EditarEmpleadoComponent } from './components/empleado/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './components/empleado/listar-empleado/listar-empleado.component';
import { AgregarClienteComponent } from './components/cliente/agregar-cliente/agregar-cliente.component';
import { DetallesClienteComponent } from './components/cliente/detalles-cliente/detalles-cliente.component';
import { EditarClienteComponent } from './components/cliente/editar-cliente/editar-cliente.component';
import { ListarClienteComponent } from './components/cliente/listar-cliente/listar-cliente.component';
import { LoginRegistroComponent } from './components/autorizacion/login-registro/login-registro.component';

const routes: Routes = [
  { path: "", component: AppComponent, pathMatch: "full" },
  { path: "login", component: LoginRegistroComponent, pathMatch: "full" },
  { path: "agregar-empresa", component: AgregarEmpresaComponent, pathMatch: "full" },
  { path: "detalles-empresa", component: DetallesEmpresaComponent, pathMatch: "full" },
  { path: "editar-empresa", component: EditarEmpresaComponent, pathMatch: "full" },
  { path: "listar-empresa", component: ListarEmpresaComponent, pathMatch: "full" },
  { path: "agregar-empleado", component: AgregarEmpleadoComponent, pathMatch: "full" },
  { path: "detalles-empleado", component: DetallesEmpleadoComponent, pathMatch: "full" },
  { path: "editar-empleado", component: EditarEmpleadoComponent, pathMatch: "full" },
  { path: "listar-empleado", component: ListarEmpleadoComponent, pathMatch: "full" },
  { path: "agregar-cliente", component: AgregarClienteComponent, pathMatch: "full" },
  { path: "detalles-cliente", component: DetallesClienteComponent, pathMatch: "full" },
  { path: "editar-cliente", component: EditarClienteComponent, pathMatch: "full" },
  { path: "listar-cliente", component: ListarClienteComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

