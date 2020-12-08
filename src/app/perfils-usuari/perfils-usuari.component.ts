<<<<<<< HEAD
import { Component, EventEmitter ,Input, OnInit, Output } from '@angular/core';
=======
import { Component, EventEmitter,OnInit, Input,Output } from '@angular/core';
>>>>>>> origin/Jorge
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-perfils-usuari',
  templateUrl: './perfils-usuari.component.html',
  styleUrls: ['./perfils-usuari.component.css']
})
export class PerfilsUsuariComponent implements OnInit {
  @Input() character: Usuario;

<<<<<<< HEAD
  @Input() usuario:Usuario;
  @Output() eliminarus: EventEmitter<Usuario> = new EventEmitter<Usuario>();

=======
  @Output() deleteEvent: EventEmitter<Usuario> = new EventEmitter<Usuario>();
>>>>>>> origin/Jorge
  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  eliminarUsuario(): void{
    this.eliminarus.emit(this.usuario);
  }
=======
  deleteUsuario(): void {
   // this.deleteEvent.emit(this.Usuario);
  }

>>>>>>> origin/Jorge
}
