import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Usuario } from '../models/usuario.model';
@Component({
  selector: 'app-panell-administrador',
  templateUrl: './panell-administrador.component.html',
  styleUrls: ['./panell-administrador.component.css']
})
export class PanellAdministradorComponent implements OnInit {

  @Input() usuario:Usuario;
  @Output() eliminarus: EventEmitter<Usuario> = new EventEmitter<Usuario>();

  constructor() { }

  ngOnInit(): void {
  }
  eliminarUsuario(): void{
    if(confirm('Estas seguro de que quieres borrar el Usuario?')){
    this.eliminarus.emit(this.usuario);
    }
  }
}
