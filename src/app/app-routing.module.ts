import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RecupeContraseComponent } from './recupe-contrase/recupe-contrase.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'registro', component: RegistroComponent},
  {path:'contraseña', component: RecupeContraseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
