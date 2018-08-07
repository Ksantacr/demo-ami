import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';
import { Pais } from '../shared/pais';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})

export class PaisesComponent implements OnInit {

  nombrePais:string;
  paises:Pais[];
  constructor(private paisService:PaisesService) { }

  ngOnInit() {

    this.nombrePais = "";

    this.paisService.getPaises().subscribe( (data)=> {

      this.paises = data;
    });
  }

  addPais() {
    console.log(this.nombrePais);

    this.paisService.addPais({id:null, name:this.nombrePais}).subscribe((data)=> {

      console.log(data);

      if(data["affectedRows"] == 1){

        this.paisService.getPaises().subscribe( (data)=> {

          this.paises = data;
        });
        this.nombrePais = "";

      }

    })
  }
}