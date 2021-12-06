import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AgregarEmpleadoComponent } from './components/empleado/agregar-empleado/agregarEmpleado.component';
import { LoginRegistroComponent } from './components/login-registro/login-registro.component';

const routes: Routes = [
  { path: "", component: AppComponent, pathMatch: "full" },
  { path: "login", component: LoginRegistroComponent, pathMatch: "full" },
  { path: "agregar-empleado", component: AgregarEmpleadoComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
