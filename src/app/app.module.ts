import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//importamos para la navegacion
import { routing,appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
//importamos forms para los formularios 
import { FormsModule } from '@angular/forms';

//importamos el service 
import { ServicePelicula } from './services/pelicula.service';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { DetallepeliculasComponent } from './components/detallepeliculas/detallepeliculas.component';
import { ResultadobusquedaComponent } from './components/resultadobusqueda/resultadobusqueda.component';
import { ModificargeneroComponent } from './components/modificargenero/modificargenero.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PeliculaComponent,
    DetallepeliculasComponent,
    ResultadobusquedaComponent,
    ModificargeneroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
  ],
  providers: [appRoutingProviders, ServicePelicula],
  bootstrap: [AppComponent]
})
export class AppModule { }
