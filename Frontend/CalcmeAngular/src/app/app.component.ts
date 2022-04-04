import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 vetor = ['Rex', 'Dilo', 'Velo', 'Utah'];
  nome='';
  email='';
  telefone='';
  add(){
    
    alert(this.nome + this.email + this.telefone)
    
  }
}
