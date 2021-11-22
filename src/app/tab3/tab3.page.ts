import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { ListaPublicaciones } from '../models/Publicaciones';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  public modificar:any;
  formularioModificar: FormGroup;
  publicacion: ListaPublicaciones = {
    id:0,
    publicacion:"",
    descripcion: "",
  }

  constructor(public fb: FormBuilder, public api:ApiService) {
    this.formularioModificar = this.fb.group({
      'id': new FormControl(""),
      'publicacion': new FormControl(""),
      'descripcion' : new FormControl(""),

    })
  }
  modificarPublicacion(){
    this.api.putPublicacion(this.publicacion.id, this.publicacion).subscribe(
      res=>{
        console.log(res)

      },
      err=> console.error(err)
    )
  }
}
