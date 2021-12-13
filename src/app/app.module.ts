import {ButtonModule} from 'primeng/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { GruposComponent } from './components/grupos/grupos.component';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {DialogModule} from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import {TabViewModule} from 'primeng/tabview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {PickListModule} from 'primeng/picklist';
import { IndexComponent } from './index/index.component';
import {MessageModule} from 'primeng/message';






@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    GruposComponent,
    IndexComponent
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
    BrowserAnimationsModule,
    ConfirmDialogModule,
    CardModule,
    InputTextModule,
    PickListModule,
    MessageModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
