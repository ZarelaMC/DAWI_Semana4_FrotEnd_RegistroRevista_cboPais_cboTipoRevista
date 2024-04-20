import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Revista } from '../models/revista.model';


const baseUrlPrueba = AppSettings.API_ENDPOINT+ '/revista';

@Injectable({
  providedIn: 'root'
})
export class RevistaService {

  constructor(private http:HttpClient) { 
    
  }

  registrar(data:Revista):Observable<any>{
    return this.http.post(baseUrlPrueba, data);
  }

}