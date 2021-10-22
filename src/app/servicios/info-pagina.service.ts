

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {

public info: InfoPagina = {};
public equipo: any[] = [];

  constructor(private http: HttpClient) {
    console.log('Servicio de infoPagina listo');

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo(){
      this.http.get('assets/data/info-pagina.json')
      .subscribe((resp: InfoPagina) => {
      console.log(resp);
      this.info = resp;
    });
  }

  private cargarEquipo(){
    this.http.get('https://practicaangular-7cab9-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((resp: any) => {
      console.log(resp);
      this.equipo = resp;
    });
  }

}
