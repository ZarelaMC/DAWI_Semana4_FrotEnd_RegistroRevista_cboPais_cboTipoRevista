import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';

const baseUrlSala = AppSettings.API_ENDPOINT+ '/sala';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  constructor() { }
}
