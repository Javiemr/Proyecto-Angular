import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import {ConfirmationService} from 'primeng/api';
import { Mensaje } from 'src/app/models/mensaje';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [ConfirmationService]
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = []
  msj: Mensaje[] = [];
  userSelected: Usuario = {id: undefined, nombre: "", apellido: "", correo: "", numtelf: "", direccion: "", estaengrupo: false, coordinador: false}
  display: boolean = false;


  constructor(public usuarioService: UsuariosService, private confirmationService: ConfirmationService) 
  {this.usuarios = this.usuarioService.usuarios}

  ngOnInit(): void {
  }

   confirm(usuario: Usuario) {
     this.display = false
    this.confirmationService.confirm({
        message: 'Seguro que quieres eliminar a este usuario?',
        accept: () => {
          this.msj = [{severity:'error', summary:'Eliminado', detail:'Has eliminado a este usuario'}];
          this.delete(usuario);
          
      },
        reject: () => {
            this.msj = [{severity:'warn', summary:'Cancelado', detail:'No se ha eliminado este usuario'}];
           
      }
    });
  }

  delete(usuario: Usuario){
    this.usuarios.splice(this.usuarios.indexOf(usuario), 1);
  }

  showDialog(usuario: Usuario) {
    this.display = true;
    this.userSelected = usuario;
  }

}