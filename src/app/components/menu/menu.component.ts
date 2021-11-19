import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ServicePelicula } from 'src/app/services/pelicula.service';
import { Genero } from 'src/app/models/genero';
import { Nacionalidades } from 'src/app/models/nacionalidades';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public valor!:string;
  public generos! : Array<Genero>;
  public nacionalidades!: Array<Nacionalidades>;
  @ViewChild("cajabusqueda") cajabusqueda!:ElementRef;
  constructor(private _service:ServicePelicula) { }

  ngOnInit(): void {
    this.cargarGenero();
    this.cargarNacionalidad();
  }

  cargarGenero(): void{
    this._service.getGeneros().subscribe(response=>{
      this.generos = response;
    });
  }

  cargarNacionalidad(): void{
    this._service.getNacionalidades().subscribe(response=>{
      this.nacionalidades = response;
    });
  }

  cambiarValor(): void{
    this.valor=this.cajabusqueda.nativeElement.value;
    console.log(this.valor);
  }
}
