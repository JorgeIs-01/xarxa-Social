import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilsUsuariComponent } from './perfils-usuari/perfils-usuari.component';
import { RegistreUsuariComponent } from './registre-usuari/registre-usuari.component';
import { PanellAdministradorComponent } from './panell-administrador/panell-administrador.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    PerfilsUsuariComponent,
    RegistreUsuariComponent,
    PanellAdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
