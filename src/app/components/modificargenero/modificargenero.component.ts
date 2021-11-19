import { Component, OnInit,ViewChild, ElementRef} from '@angular/core';
import { ServicePelicula } from 'src/app/services/pelicula.service';
import { Genero } from 'src/app/models/genero';
import { Pelicula } from 'src/app/models/pelicula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificargenero',
  templateUrl: './modificargenero.component.html',
  styleUrls: ['./modificargenero.component.css']
})
export class ModificargeneroComponent implements OnInit {

  public generos!:Array<Genero>;
  public peliculas!:Array<Pelicula>;
  @ViewChild("cajapelicula") cajapelicula!: ElementRef;//cogemos el valor del form
  @ViewChild("cajagenero") cajagenero!: ElementRef;//cogemos el valor del form

  constructor(
    private _service:ServicePelicula,
    private _router:Router,
  ) { }

  ngOnInit(): void {
    this.cargarGenero();
    this.cargarPeliculas();
  }

  cargarGenero(): void{
    this._service.getGeneros().subscribe(response=>{
      this.generos = response;
    });
  }

  cargarPeliculas():void{
    this._service.getPeliculas().subscribe(response=>{
      this.peliculas = response;
    });
  }

  modificarPeliculas(): void{
    var pelicula = this.cajapelicula.nativeElement.value;
    var genero = this.cajagenero.nativeElement.value;
    this._service.modificarPeliGenero(pelicula,genero).subscribe(response=>{
      this._router.navigate(["/detallepelicula", genero]); // redirecciona a donde se ha realizado el cambio
    });
  }

}
