import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ServicePelicula } from 'src/app/services/pelicula.service';
import { Pelicula } from 'src/app/models/pelicula';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-resultadobusqueda',
  templateUrl: './resultadobusqueda.component.html',
  styleUrls: ['./resultadobusqueda.component.css']
})
export class ResultadobusquedaComponent implements OnInit {
  public peliculas!:Array<Pelicula>;
  @ViewChild("cajabusqueda") cajabusqueda!: ElementRef;
  constructor(
    private _service:ServicePelicula,
    private _route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params : Params) => {
      var valor = params['nombre'];
      this.cargarPeliculas(valor);
    });
  }

  cargarPeliculas(nombre:string){
    this._service.buscarPelicula(nombre).subscribe(response=>{
      this.peliculas=response;
    });
  }
}
