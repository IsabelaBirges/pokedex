import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaracteristicasPokemonComponent } from './caracteristicas-pokemon/caracteristicas-pokemon.component';
import { FavoritosPokemonComponent } from './favoritos-pokemon/favoritos-pokemon.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'caracteristicas/:id',
    component: CaracteristicasPokemonComponent,
  },
  {
    path: 'favoritos',
    component: FavoritosPokemonComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
