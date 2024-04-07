import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';

const baseUrlTesis = AppSettings.API_ENDPOINT+ '/tesis';

@Injectable({
  providedIn: 'root'
})
export class TesisService {

  constructor() { }
}
