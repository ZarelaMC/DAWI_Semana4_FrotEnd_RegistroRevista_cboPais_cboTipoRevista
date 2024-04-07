import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';

const baseUrlAutor = AppSettings.API_ENDPOINT+ '/autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor() { }
}
