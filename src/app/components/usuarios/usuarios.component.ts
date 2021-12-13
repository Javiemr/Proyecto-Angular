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
    this.confirmationService.confirm({
        message: 'Are you sure that you want to delete this usuario?',
        accept: () => {
          this.msj = [{severity:'error', summary:'Deleted', detail:'You have deleted the usuario'}];
          this.delete(usuario);
          this.display = false;
      },
        reject: () => {
            this.msj = [{severity:'warn', summary:'Rejected', detail:'You have rejected'}];
            this.display = false;
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