import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Ejemplo } from '../models/ejemplo.model';

const baseUrlPrueba = AppSettings.API_ENDPOINT+ '/ejemplo';

@Injectable({
  providedIn: 'root'
})
export class EjemploService {

  constructor(private http:HttpClient) { }

  registrar(data:Ejemplo):Observable<any>{
    return this.http.post(baseUrlPrueba, data);
  }

}
