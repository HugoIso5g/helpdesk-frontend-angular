import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Credenciais } from 'src/app/Models/Credenciais';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credenciais = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(
    private toast: ToastrService,
    private router: Router,
    private service : AuthService
  ) { }

  ngOnInit(): void { }

  logar(){
   this.service.authenticate(this.creds).subscribe(
      response => {
        this.service.successfullLogin(response.headers.get('Authorization')?.substring(7) || '');
        this.router.navigate(['home']);
      },
      error => this.toast.error(error.message)
    )
  }

  validaCampos(): boolean {
    return this.email.valid && this.senha.valid
  }

  
}
