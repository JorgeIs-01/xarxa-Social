import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanellAdministradorComponent } from './panell-administrador/panell-administrador.component';
import { PerfilsUsuariComponent } from './perfils-usuari/perfils-usuari.component';
import { RegistreUsuariComponent } from './registre-usuari/registre-usuari.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'perfils-usuari', component: PerfilsUsuariComponent },
  { path: 'panell-administrador', component: PanellAdministradorComponent},
  {path: 'registre-usuari', component: RegistreUsuariComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
