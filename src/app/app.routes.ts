import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login.component';
import { IndexComponent } from './index/index.component';

import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { AgregarLibroComponent } from './components/agregar-libro/agregar-libro.component';
import { AgregarTesisComponent } from './components/agregar-tesis/agregar-tesis.component';
import { AgregarAutorComponent } from './components/agregar-autor/agregar-autor.component';
import { AgregarSalaComponent } from './components/agregar-sala/agregar-sala.component';
import { AgregarProveedorComponent } from './components/agregar-proveedor/agregar-proveedor.component';
import { AgregarEditorialComponent } from './components/agregar-editorial/agregar-editorial.component';
import { AgregarRevistaComponent } from './components/agregar-revista/agregar-revista.component';

import { ConsultaAlumnoComponent } from './components/consulta-alumno/consulta-alumno.component';
import { ConsultaLibroComponent } from './components/consulta-libro/consulta-libro.component';
import { ConsultaTesisComponent } from './components/consulta-tesis/consulta-tesis.component';
import { ConsultaAutorComponent } from './components/consulta-autor/consulta-autor.component';
import { ConsultaSalaComponent } from './components/consulta-sala/consulta-sala.component';
import { ConsultaProveedorComponent } from './components/consulta-proveedor/consulta-proveedor.component';
import { ConsultaEditorialComponent } from './components/consulta-editorial/consulta-editorial.component';
import { ConsultaRevistaComponent } from './components/consulta-revista/consulta-revista.component';

import { CrudAlumnoComponent } from './components/crud-alumno/crud-alumno.component';
import { CrudLibroComponent } from './components/crud-libro/crud-libro.component';
import { CrudTesisComponent } from './components/crud-tesis/crud-tesis.component';
import { CrudAutorComponent } from './components/crud-autor/crud-autor.component';
import { CrudSalaComponent } from './components/crud-sala/crud-sala.component';
import { CrudProveedorComponent } from './components/crud-proveedor/crud-proveedor.component';
import { CrudEditorialComponent } from './components/crud-editorial/crud-editorial.component';
import { CrudRevistaComponent } from './components/crud-revista/crud-revista.component';
import { TransaccionAsignacionRolComponent } from './components/transaccion-asignacion-rol/transaccion-asignacion-rol.component';
import { TransaccionAsignacionOpcionComponent } from './components/transaccion-asignacion-opcion/transaccion-asignacion-opcion.component';
import { TransaccionPrestamoLibroComponent } from './components/transaccion-prestamo-libro/transaccion-prestamo-libro.component';
import { TransaccionDevolucionLibroComponent } from './components/transaccion-devolucion-libro/transaccion-devolucion-libro.component';
import { TransaccionReporteSalaComponent } from './components/transaccion-reporte-sala/transaccion-reporte-sala.component';
import { TransaccionReporteLibroComponent } from './components/transaccion-reporte-libro/transaccion-reporte-libro.component';
import { TransaccionAsignacionLibroComponent } from './components/transaccion-asignacion-libro/transaccion-asignacion-libro.component';
import { TransaccionReservaSalaComponent } from './components/transaccion-reserva-sala/transaccion-reserva-sala.component';
import { AgregarEjemploComponent } from './components/agregar-ejemplo/agregar-ejemplo.component';



export const routes: Routes = [
    {path:"verRegistroAlumno", component:AgregarAlumnoComponent },
    {path:"verRegistroLibro", component:AgregarLibroComponent },
    {path:"verRegistroTesis", component:AgregarTesisComponent },
    {path:"verRegistroAutor", component:AgregarAutorComponent },
    {path:"verRegistroSala", component:AgregarSalaComponent },
    {path:"verRegistroProveedor", component:AgregarProveedorComponent },
    {path:"verRegistroEditorial", component:AgregarEditorialComponent },
    {path:"verRegistroRevista", component:AgregarRevistaComponent },
    {path:"verRegistroEjemplo", component:AgregarEjemploComponent },
  
    {path:"verConsultaAlumno", component:ConsultaAlumnoComponent },
    {path:"verConsultaLibro", component:ConsultaLibroComponent },
    {path:"verConsultaTesis", component:ConsultaTesisComponent },
    {path:"verConsultaAutor", component:ConsultaAutorComponent },
    {path:"verConsultaSala", component:ConsultaSalaComponent },
    {path:"verConsultaProveedor", component:ConsultaProveedorComponent },
    {path:"verConsultaEditorial", component:ConsultaEditorialComponent  },
    {path:"verConsultaRevista", component:ConsultaRevistaComponent },
  
    {path:"verCrudAlumno", component:CrudAlumnoComponent },
    {path:"verCrudLibro", component:CrudLibroComponent },
    {path:"verCrudTesis", component:CrudTesisComponent },
    {path:"verCrudAutor", component:CrudAutorComponent },
    {path:"verCrudSala", component:CrudSalaComponent },
    {path:"verCrudProveedor", component:CrudProveedorComponent },
    {path:"verCrudEditorial", component:CrudEditorialComponent },
    {path:"verCrudRevista", component:CrudRevistaComponent },
  
    {path:"VerAsignacionRol", component:TransaccionAsignacionRolComponent },
    {path:"VerAsignacionOpcion", component:TransaccionAsignacionOpcionComponent },
    {path:"VerAsignacionLibro", component:TransaccionAsignacionLibroComponent},
    {path:"verPrestamoLibro", component:TransaccionPrestamoLibroComponent },
    {path:"verDevolucionLibro", component:TransaccionDevolucionLibroComponent },
    {path:"verReservaSala", component:TransaccionReservaSalaComponent },
    {path:"verReporteLibro", component:TransaccionReporteLibroComponent},
    {path:"verReporteSala", component:TransaccionReporteSalaComponent },
  
    { path: '', component: IndexComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ];
  
