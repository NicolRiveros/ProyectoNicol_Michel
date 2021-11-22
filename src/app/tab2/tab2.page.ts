import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { ListaPublicaciones } from '../models/Publicaciones';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  formularioPublicacion: FormGroup;

  constructor(public fb: FormBuilder, public api:ApiService) {

    this.formularioPublicacion = this.fb.group({
      'publicacion': new FormControl(""),
      'descripcion': new FormControl(""),

    })

  }
  publicacion : ListaPublicaciones = 
  {
    publicacion: "",
    descripcion:""
  }

  pub(){
    this.api.savePublicacion(this.publicacion).subscribe(
      res => {
        console.log(res);
      },
      err=> console.log(err)
    )
  }

}
