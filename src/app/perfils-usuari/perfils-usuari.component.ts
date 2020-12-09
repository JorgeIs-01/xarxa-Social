import { Component, EventEmitter ,Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-perfils-usuari',
  templateUrl: './perfils-usuari.component.html',
  styleUrls: ['./perfils-usuari.component.css']
})
export class PerfilsUsuariComponent implements OnInit {

  us = [new Usuario()];
  @Input() usuario:Usuario;
  @Output() eliminarus: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  constructor() {


   }
   charactersArray: Usuario[] = [];

  ngOnInit(): void {
    this.us[0].nombre='Perico';
    this.us[0].apellido='de los palotes';
    this.us[0].edad=22;
    this.us[0].correo="hola@gmail.com";
    this.us[0].imagen="hola";
    this.charactersArray.push(new Usuario('Pedro','Garcia', 34, 'Perdogarcia@gmail.com','asd' ));
    this.charactersArray.push(new Usuario('Juan','Rodriguez', 34, 'Perdogarcia@gmail.com','asd' ));
    this.charactersArray.push(new Usuario('Roberto','Perez', 34, 'Perdogarcia@gmail.com','asd'));

  }


}
