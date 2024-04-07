import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';

const baseUrlProveedor = AppSettings.API_ENDPOINT+ '/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor() { }
}
