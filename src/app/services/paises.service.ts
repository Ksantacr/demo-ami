import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../shared/pais';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  readonly API_URL = 'http://www.modoayuda.com/api';

  constructor(private http:HttpClient ) {
  }

  getPaises() {
    return this.http.get<Pais[]>(`${this.API_URL}/country`);
  }

  addPais(pais:Pais) {

    return this.http.post(`${this.API_URL}/country`, pais);

  }

}
