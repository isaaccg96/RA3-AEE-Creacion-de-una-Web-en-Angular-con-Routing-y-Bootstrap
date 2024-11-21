import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaComponent } from './carta/carta.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [


  { path: 'carta', component: CartaComponent },  // Ruta para la carta de productos
  {path: 'inicio', component: InicioComponent},
  {path: '', component: InicioComponent},
  {path: 'contacto', component: ContactoComponent}, //Ruta para la página de contacto
  {path: 'noticias', component: NoticiasComponent}, //Ruta para la página de noticias
  {path: 'privacidad', component: PrivacidadComponent}, //Ruta para la página de privacidad
  {path: 'carrito', component: CarritoComponent}, //Ruta para la página del carrito

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }