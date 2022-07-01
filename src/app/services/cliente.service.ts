import { Observable } from 'rxjs';
import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../Models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = API_CONFIG.baseUrl + '/clientes';

  constructor(private http: HttpClient) { }

  public findAll() :Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl);
  }

  public findById(id: number) : Observable<Cliente>{
    return this.http.get<Cliente>(`${this.baseUrl}/${id}`);
  }

  public create(cliente : Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(this.baseUrl,cliente);
  }

  public update(cliente: Cliente) : Observable<Cliente>{
    return this.http.put<Cliente>(`${this.baseUrl}/${cliente.id}`,cliente);
  }

  public delete(id:number):Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.baseUrl}/${id}`);
  }
}
