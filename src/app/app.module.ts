import {ButtonModule} from 'primeng/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {DialogModule} from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import {TabViewModule} from 'primeng/tabview';





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
    TableModule,
    ConfirmationPopoverModule,
    DialogModule,
    MessagesModule,
    ToastModule,
    TabViewModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
