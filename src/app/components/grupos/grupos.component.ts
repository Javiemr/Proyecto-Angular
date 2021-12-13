import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss'],
  providers: [MessageService]
})
export class GruposComponent implements OnInit {
  usuario: Usuario[] = []
  cont = 0
  coordinador: Usuario[] = []

  constructor(private usuariosService:UsuariosService, private messageService:MessageService) { 
    this.usuario = this.usuariosService.usuarios.filter(usuario=>usuario.coordinador == false)
    this.coordinador = this.usuariosService.usuarios.filter(usuario=>usuario.coordinador == true)
   }
  
  ngOnInit(): void {
  }
  changeToCoord(){
    this.cont = 0
    this.showSuccess()
    while(this.cont < this.coordinador.length){
      if(this.coordinador.filter(coordinador => coordinador.coordinador == false)){
        this.coordinador[this.cont].coordinador = true
        this.cont++
      }
      else{
        this.cont = 0
      }
    }
  }
  changeToUser(){
    this.cont = 0
    
    while(this.cont < this.usuario.length){
      if(this.usuario.filter(usuario => usuario.coordinador == true)){
        this.usuario[this.cont].coordinador = false
        this.cont++
      }
      else{
        this.cont = 0
      }
    }
  }
  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Datos actualizados'});
}
}
