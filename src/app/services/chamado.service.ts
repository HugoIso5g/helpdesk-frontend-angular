import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  baseUrl = API_CONFIG.baseUrl + '/chamados';
  
  constructor(private http: HttpClient) { }
}
