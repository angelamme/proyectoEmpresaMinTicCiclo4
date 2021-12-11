import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelEmpresa } from './Modelos/empresa.model';
import { SeguridadService } from './servicios/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

url = "http://localhost:3000";
token: String = '';

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerEmpresas():Observable<ModelEmpresa[]>{
    return this.http.get<ModelEmpresa[]>(`${this.url}/empresas`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }

  CrearEmpresa(empresa: ModelEmpresa): Observable<ModelEmpresa>{
    return this.http.post<ModelEmpresa>(`${this.url}/empresas`,empresa,{
      headers: new HttpHeaders({
        'Autorization':`Bearer ${this.token}`
      })
    })
  }

  ActualizarEmpresa(empresa: ModelEmpresa): Observable<ModelEmpresa>{
    return this.http.put<ModelEmpresa>(`${this.url}/empresas`,empresa,{
      headers: new HttpHeaders({
        'Autorization':`Bearer ${this.token}`
      })
    })
  } 
}