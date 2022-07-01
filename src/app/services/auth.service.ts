import { API_CONFIG } from './../config/api.config';
import { Credenciais } from './../Models/Credenciais';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService: JwtHelperService = new JwtHelperService;
  baseUrl = API_CONFIG.baseUrl;

  constructor(private http: HttpClient) { }

  authenticate(creds: Credenciais){
    return this.http.post(`${this.baseUrl}/login`,creds,{
      observe:'response',
      responseType:'text'
    });
  }

  successfullLogin(authToken: string) : void {
    localStorage.setItem('token',authToken);
  }

  isAuthenticated(): boolean {
    let token = localStorage.getItem('token');
    if(token != null){
      return !this.jwtService.isTokenExpired(token);
    }
    return false;
  }

  logout():void {
    localStorage.clear();
  }
}
