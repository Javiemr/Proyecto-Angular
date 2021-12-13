import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GruposComponent } from './components/grupos/grupos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
    {path:'index', component: IndexComponent},
    {path:'usuarios', component: UsuariosComponent},
    {path:'grupos', component: GruposComponent},
    { path: '',   redirectTo: '/index', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
