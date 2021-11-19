import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Global } from "../global";
import { Observable } from "rxjs";

@Injectable()
export class ServicePelicula{
    constructor(private _http:HttpClient){}

    getPeliculas(): Observable<any>{
        var request = "/api/peliculas";
        var url = Global.urlapipeliculas + request;
        return this._http.get(url);
    }
    
    getGeneros(): Observable<any>{
        var request = "/api/generos";
        var url = Global.urlapipeliculas + request;
        return this._http.get(url);
    }

    getNacionalidades(): Observable<any>{
        var request = "/api/nacionalidades";
        var url = Global.urlapipeliculas + request;
        return this._http.get(url);
    }

    getPeliculasNacionalidad(idnacionalidad: string): Observable<any>{
        var request = "/api/peliculas/peliculasnacionalidad/" + idnacionalidad;
        var url = Global.urlapipeliculas + request;
        return this._http.get(url);
    }

    getPeliculasGenero(idgenero: string): Observable<any>{
        var request = "/api/peliculas/peliculasgenero/" + idgenero;
        var url = Global.urlapipeliculas + request;
        return this._http.get(url);
    }

    buscarPelicula(nombre:string): Observable<any>{
        var request = "/api/peliculas/peliculastitulo/" + nombre;
        var url = Global.urlapipeliculas + request;
        return this._http.get(url);
    }

    modificarPeliGenero(idpelicula:string,idgenero:string): Observable<any>{
        var request = "/api/peliculas/updatepeliculagenero/" + idpelicula + "/" + idgenero;
        var url = Global.urlapipeliculas + request;
        var header = new HttpHeaders().set("Content-Type","application/json");
        return this._http.put(url,{headers: header});
    }

    eliminarPelicula(idpelicula:number):Observable<any>{
        var request = "/api/peliculas/" + idpelicula;
        var url = Global.urlapipeliculas + request;
        return this._http.delete(url);
    }
}