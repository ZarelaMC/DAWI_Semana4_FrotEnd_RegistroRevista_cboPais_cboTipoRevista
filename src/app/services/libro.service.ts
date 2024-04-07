import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';

const baseUrlLibro = AppSettings.API_ENDPOINT+ '/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor() { }
}
