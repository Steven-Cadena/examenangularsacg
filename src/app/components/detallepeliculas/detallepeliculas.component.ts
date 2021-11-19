import { Component, OnInit } from '@angular/core';
import { ServicePelicula } from 'src/app/services/pelicula.service';
import { Pelicula } from 'src/app/models/pelicula';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Router } from '@angular/router';

//para youtube
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detallepeliculas',
  templateUrl: './detallepeliculas.component.html',
  styleUrls: ['./detallepeliculas.component.css']
})
export class DetallepeliculasComponent implements OnInit {

  public peliculas! : Array<Pelicula>; //array para meter las peliculas 
  public id!: string;
  public detalle!:Pelicula;

  constructor(
    private _service:ServicePelicula,
    private _route:ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private _router:Router,

  ) { }

  //metodo para youtube
  getVideoIframe(url:string) {
    var video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
}

  getVideo(url:string){
    this.getVideoIframe(url);
  }

  eliminarPelicula(event:number): void{
    console.log(event);
    //this.peliculas.splice(event,1);
    this._service.eliminarPelicula(event).subscribe(response=>{
      this._router.navigate(["/"]);
    });
    //una vez eliminado te lleva a home 
  }


  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=>{
      if(params['idGenero']){
        this.id =params['idGenero'];
        this.cargarPeliculasGenero(this.id);
      }else if(params['idNacionalidad']){
        this.id = params['idNacionalidad'];
        this.cargarPeliculasNacionalidad(this.id);
      }
    });
  }
  funcionInterna(){}

  cargarPeliculasGenero(id:string): void{
    this.peliculas = [];
    this._service.getPeliculasGenero(id).subscribe(response=>{
      this.peliculas = response;
    });

  }

  cargarPeliculasNacionalidad(id:string): void{
    this.peliculas = [];
    this._service.getPeliculasNacionalidad(id).subscribe(response=>{
      this.peliculas = response;
    });
  }

  seleccionarDetalle(event:Pelicula):void{
    this.detalle = event;
  }
}
