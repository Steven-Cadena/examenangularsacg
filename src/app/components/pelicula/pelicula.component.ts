import { ServicePelicula } from 'src/app/services/pelicula.service';
import { Pelicula } from 'src/app/models/pelicula';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  @Input() pelicula!: Pelicula; // aqui recibimos el objeto de pelicula del padre y podemos dibujarlo
  @Input() index!: number;
  //public peliculas! : Array<Pelicula>;
  //public pelicula!: Pelicula;
  public id!: string;

  @Output() seleccionarDetalle: EventEmitter<any> = new EventEmitter();
  @Output() eliminarPelicula: EventEmitter<any> = new EventEmitter();
  constructor(
    private _service:ServicePelicula,
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {

  }
//  mequedo aqui
  eliminarPeliculaHijo(): void{
    this.eliminarPelicula.emit(this.pelicula.idPelicula);
  }
  seleccionarDetalleHijo(): void{
    this.seleccionarDetalle.emit(this.pelicula);
  }
}
