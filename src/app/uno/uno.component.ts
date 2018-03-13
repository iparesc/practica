import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../providers/servicio.service';
import { Practica } from '../model/practica';
@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {
  practicas : Practica[];
  id:string;
  constructor(public servicioService:ServicioService) {
    this.practicas=[];
   }

  ngOnInit() {
    this.cargarTareas();
  }
  cargarTareas(){
    console.log('TodosComponent cargarTareas');
    this.practicas = [];
    this.servicioService.getTodos().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error=>{
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe
  }
  buscarTareas(){
    console.log('TodosComponent cargarTareas');
    this.practicas = [];
    this.servicioService.getTodo(this.id).subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.map(resultado);
      },
      error=>{
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe
  }
  mapeo( result : any ){

    let practica:Practica;
    result.forEach(el => {
        practica = new Practica( el.title );
        practica.id = el.id;
        practica.idUser = el.userId;
        practica.completed = el.completed;

        this.practicas.push(practica);
    });

  }
  map( result : any ){

    let practica:Practica;
   
        practica = new Practica( result.title );
        practica.id = result.id;
        practica.idUser = result.userId;
        practica.completed = result.completed;

        this.practicas.push(practica);
    };
}
