import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public publicacion:any;
  public descripcion:any;
  public imagen:any;

  constructor(public api:ApiService) {
    
  }

  buscarPublicacion(){
    this.api.getPublicaciones(this.publicacion).subscribe(
      res=>{

        var dataString= JSON.stringify(res);
        var pubJson= JSON.parse(dataString);
        this.imagen = pubJson.publicacion.publicacion;
        this.descripcion = pubJson.publicacion.descripcion;
      },
      err=>console.error(err)
    )
  }


  eliminarPublicacion(){
    this.api.deletePublicaciones(this.publicacion).subscribe(
      res=>{
        console.log(res)
      },
      err=> console.error(err)
    )
  }
  

}
