import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AgregarClienteComponent } from './components/cliente/agregar-cliente/agregar-cliente.component';
import { AgregarEmpleadoComponent } from './components/empleado/agregar-empleado/agregarEmpleado.component';
import { ListarClienteComponent } from './components/cliente/listar-cliente/listar-cliente.component';
import { ListarEmpleadoComponent } from './components/empleado/listar-empleado/listar-empleado.component';
import { PerfilUsuarioComponent } from './components/perfiles/perfil-usuario/perfil-usuario.component';

const routes: Routes = [
  { path: "", component: AppComponent, pathMatch: "full" },
  { path: "inicio", component: PerfilUsuarioComponent, pathMatch: "full" },
  { path: "agregar-empleado", component: AgregarEmpleadoComponent, pathMatch: "full" },
  { path: "agregar-cliente", component: AgregarClienteComponent, pathMatch: "full" },
  { path: "listar-cliente", component: ListarClienteComponent, pathMatch: "full" },
  { path: "listar-empleado", component: ListarEmpleadoComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
