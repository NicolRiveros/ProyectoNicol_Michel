import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from '../models/User';
import { ApiService } from '../api.service';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alerta:AlertController, public api:ApiService) {
    
    this.formularioRegistro = this.fb.group({
      'email': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmacionPassword': new FormControl("")
    });
   }

   guardarUser(){
    this.api.saveUser(this.user).subscribe(
      res => {
        console.log(res);
      },
      err=> console.log(err)
    )
  }

  user: User = 
  {
    email: "",
    password:""
  }

  ngOnInit() {
  }

  guardar(){
    console.log('guardar');
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      
    }
  }

  async alertRecoverPass(){
    const alert = await this.alerta.create({
      header:'Cuenta creada',
      message: 'Su cuenta ha sido creada exitosamente.',
      buttons:['Entendido']
    });
    alert.present()
  }
}
