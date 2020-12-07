import { Component, EventEmitter ,Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-perfils-usuari',
  templateUrl: './perfils-usuari.component.html',
  styleUrls: ['./perfils-usuari.component.css']
})
export class PerfilsUsuariComponent implements OnInit {

  @Input() usuario:Usuario;
  @Output() eliminarus: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  constructor() { }

  ngOnInit(): void {
  }

  eliminarUsuario(): void{
    this.eliminarus.emit(this.usuario);
  }
}
