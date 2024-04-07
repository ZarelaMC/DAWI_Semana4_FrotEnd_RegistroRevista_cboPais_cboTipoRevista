import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';

const baseUrlAlumno = AppSettings.API_ENDPOINT+ '/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor() { }
}
