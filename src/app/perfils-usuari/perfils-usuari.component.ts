import { Component, EventEmitter,OnInit, Input,Output } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-perfils-usuari',
  templateUrl: './perfils-usuari.component.html',
  styleUrls: ['./perfils-usuari.component.css']
})
export class PerfilsUsuariComponent implements OnInit {
  @Input() character: Usuario;

  @Output() deleteEvent: EventEmitter<Usuario> = new EventEmitter<Usuario>();
  constructor() { }

  ngOnInit(): void {
  }

  deleteUsuario(): void {
    this.deleteEvent.emit(this.Usuario);
  }

}
