import { Component, OnInit } from '@angular/core';

import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mensaje:string="";
  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public api: ApiService, private router: Router) { 
                          
    this.formularioLogin = new FormGroup({
      'email': new FormControl('',Validators.required),
      'password': new FormControl('',Validators.required)
    })
  }
   
  buscarUsuario(){
    this.api.getUsuario().subscribe(
      resultado => {
        console.log(resultado);
      }

    );
  }

  ngOnInit() {
  }

  UsuarioValidar(){
    if(this.formularioLogin.get('email').value=='nicol_michel@gmail.com' && this.formularioLogin.get('password').value=="12345")
    {
      this.router.navigate(['home/tabs/tab1'])
    }
    else
    {
      this.mensaje="Las credenciales no son correctas."
    }
  }

}



//(click)='buscarUsuario()'   ->LOGIN
//onclick="MuestraMensajeCarga();"    ->