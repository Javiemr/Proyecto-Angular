import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
    {path:'usuarios', component: UsuariosComponent},
    {path:'grupos', component: GruposComponent},
    {path:'actividades', component: ActividadesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
