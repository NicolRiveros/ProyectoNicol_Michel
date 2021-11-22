import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './models/User';
import { ListaPublicaciones } from './models/Publicaciones';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apiURL:any = 'http://localhost:8000/api/usuarios/';
  //http://localhost:8000/api/usuarios/

  public api_URL:any ='http://localhost:8000/api/publicaciones/';

  constructor(public http:HttpClient) { }

  getUsuario(){
    return this.http.get(this.apiURL)
  }

  saveUser(user:User){
    return this.http.post(this.apiURL, user);
  }

  getPublicaciones(id){
    return this.http.get(this.api_URL+id)
  }

  deletePublicaciones(id){
    return this.http.delete(this.api_URL+id)
  }

  savePublicacion(publicacion:ListaPublicaciones){
    return this.http.post(this.api_URL, publicacion)
  }

  putPublicacion(id: string|number, updatedPublication:ListaPublicaciones):Observable<ListaPublicaciones>{
    return this.http.put(`${this.api_URL}${id}/`, updatedPublication)
  }

}
