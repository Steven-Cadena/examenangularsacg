import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { DetallepeliculasComponent } from './components/detallepeliculas/detallepeliculas.component';
import { ResultadobusquedaComponent } from './components/resultadobusqueda/resultadobusqueda.component';
import { ModificargeneroComponent } from './components/modificargenero/modificargenero.component';
const appRoutes: Routes = [
    {path:"",component: HomeComponent},
    {path:"detallepelicula/:idGenero", component: DetallepeliculasComponent},
    {path:"detallepelicula/:idNacionalidad", component: DetallepeliculasComponent},
    //{path:"detalle/:idpelicula",component: DetallepeliculasComponent},
    {path:"resultado/:nombre", component:ResultadobusquedaComponent},
    {path:"modificar", component:ModificargeneroComponent},

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);