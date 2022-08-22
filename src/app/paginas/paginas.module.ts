import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaracteristicasPokemonComponent } from './caracteristicas-pokemon/caracteristicas-pokemon.component';
import { RoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/compartilhados.module';
import { FavoritosPokemonComponent } from './favoritos-pokemon/favoritos-pokemon.component';



@NgModule({
  declarations: [
    HomeComponent,
    CaracteristicasPokemonComponent,
    FavoritosPokemonComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PaginasModule { }
