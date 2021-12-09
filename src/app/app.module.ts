import {ButtonModule} from 'primeng/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { ActividadesComponent } from './components/actividades/actividades.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    GruposComponent,
    ActividadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
