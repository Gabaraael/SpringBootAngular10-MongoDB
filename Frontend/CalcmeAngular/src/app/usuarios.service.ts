import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from './IUsuario';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private httpClient: HttpClient) {}

  salvarUsuario(usuario : IUsuario) {
    return this.httpClient.post(`${API_PATH}usuario`, usuario).toPromise();
  }
}
