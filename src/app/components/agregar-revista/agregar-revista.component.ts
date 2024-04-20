import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../app.material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../menu/menu.component';
import { Pais } from '../../models/pais.model';
import { DataCatalogo } from '../../models/dataCatalogo.model';
import { UtilService } from '../../services/util.service';
import { Revista } from '../../models/revista.model';
import Swal from 'sweetalert2';
import { RevistaService } from '../../services/revista.service';
import { Usuario } from '../../models/usuario.model';
import { TokenService } from '../../security/token.service';

@Component({
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule, MenuComponent],
  selector: 'app-agregar-revista',
  templateUrl: './agregar-revista.component.html',
  styleUrls: ['./agregar-revista.component.css']
})

export class AgregarRevistaComponent {
  lstPais : Pais[] = [];
  lstTipoRevista : DataCatalogo[] = [];

  //Objeto vacío que va a mostrar los datos por defecto del formulario
  objRevista: Revista ={
      nombre: "",
      frecuencia: "",
      fechaCreacion: new Date(),
      telefono: "",
      pais: {
        idPais: -1
      },
      tipoRevista: {
        idDataCatalogo: -1
      }
    }

  //Crear objeto Usuario vacío
  objUsuario: Usuario = {};

  constructor(private UtilService : UtilService,
              private revistaService: RevistaService, //Agregar importaciones
              private tokenService : TokenService){
                  this.UtilService.listaPais().subscribe(
                    x => this.lstPais = x
                  );
                  this.UtilService.listaTipoLibroRevista().subscribe(
                    x => this.lstTipoRevista = x
                  );
              this.objUsuario.idUsuario = this.tokenService.getUserId();
  }

  //Método registra
  registra(){
    //Asignar fechas por defecto
    this.objRevista.usuarioRegistro = this.objUsuario;
    this.objRevista.usuarioActualiza = this.objUsuario;

    this.revistaService.registrar(this.objRevista).subscribe(
      x =>
        Swal.fire({
          icon: 'info',
          title: 'Resultado del Regitro',
          text: x.mensaje,
        })
    );
  }
}
