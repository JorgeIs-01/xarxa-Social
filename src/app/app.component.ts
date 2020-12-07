import { Component } from '@angular/core';
import { Usuario } from './models/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xarxa-Social';

  charactersArray: Usuario[] = [];
  characterSelected: Usuario = null;

ngOnInit():void{
    this.charactersArray.push(new Usuario('Pedro','Garcia', 34, 'Perdogarcia@gmail.com','asd' ));
    this.charactersArray.push(new Usuario('Juan','Rodriguez', 34, 'Perdogarcia@gmail.com','asd' ));
    this.charactersArray.push(new Usuario('Roberto','Perez', 34, 'Perdogarcia@gmail.com','asd'));


    this.characterSelected = JSON.parse(Usuario);

}



}
