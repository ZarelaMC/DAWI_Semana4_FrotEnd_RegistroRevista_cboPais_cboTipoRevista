import { DataCatalogo } from "./dataCatalogo.model";
import { Pais } from "./pais.model";
import { Usuario } from "./usuario.model";

export class Revista {

    idRevista?: number;
    nombre?:string;
    frecuencia?:string;
    fechaCreacion?:Date;
    telefono?:string;
    pais?: Pais;
    tipoRevista ?: DataCatalogo;
    usuarioRegistro?: Usuario;
    usuarioActualiza?: Usuario

}