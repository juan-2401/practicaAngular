import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/servicios/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent implements OnInit {

  

  public anio: number = new Date().getFullYear();

  constructor(public servicio: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
