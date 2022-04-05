import { Component } from '@angular/core';
import { IUsuario } from './IUsuario';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private usuariosService: UsuariosService) {}

  telefone: String = '';
  nome: String = '';
  email: String = '';

  salvarUsuario(telefone: String, email: String, nome: String) {
    const usuario: IUsuario = {
      nome,
      email,
      telefone,
    };
    console.log(usuario)
    this.usuariosService.salvarUsuario(usuario);
    
  }
}
