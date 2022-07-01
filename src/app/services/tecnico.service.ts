import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Tecnico } from '../Models/Tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  baseUrl = API_CONFIG.baseUrl;

  constructor(private http: HttpClient) { }

  public findById(id: number): Observable<Tecnico>{
    return this
    .http
    .get<Tecnico>(`${this.baseUrl}/tecnicos/${id}`);
  }

  public findAll(): Observable<Tecnico[]>{
    return this
    .http
    .get<Tecnico[]>(`${this.baseUrl}/tecnicos`);
  }

  public create(tecnico: Tecnico) : Observable<Tecnico>{
    return this
    .http
    .post<Tecnico>(`${this.baseUrl}/tecnicos`,tecnico);
  }

  public update(tecnico: Tecnico) : Observable<Tecnico>{
    return this
    .http
    .put<Tecnico>(`${this.baseUrl}/tecnicos/${tecnico.id}`,tecnico);
  }

  public delete(id: any): Observable<Tecnico>{
    return this
    .http
    .delete<Tecnico>(`${this.baseUrl}/tecnicos/${id}`);
  }

}
