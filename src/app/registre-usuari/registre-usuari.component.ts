import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import {ConfirmarContrasenas} from './validator';

@Component({
  selector: 'app-registre-usuari',
  templateUrl: './registre-usuari.component.html',
  styleUrls: ['./registre-usuari.component.css']
})
export class RegistreUsuariComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  usuario:FormGroup;
  submitted = false;

ngOnInit(): void {
  this.usuario = this.formBuilder.group({
    nombre: ['',Validators.required, Validators.maxLength(10)],
    apellido: ['',Validators.required, Validators.maxLength(10)],
    edad: ['',Validators.required],
    foto: ['',Validators.required],
    descripcion: ['',Validators.required, Validators.minLength(10) ,Validators.maxLength(200)],
    correo: ['',[Validators.required, Validators.email]],
    contrasena: ['',Validators.required],
    confirmarContrasena: ['',Validators.required],
  },{
    validator: ConfirmarContrasenas('contrasena', 'confirmarContrasena')
  });
}

get f(){
  return this.usuario.controls;
}

enviarDatos(){
  this.submitted = true;
  if(this.usuario.invalid){
    return;
  }
  Swal.fire({
    icon: 'success',
    title: 'FELICIDADES CRUCK!',
  });
}

}
