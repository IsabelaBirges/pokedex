import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';
import { RouterModule } from '@angular/router';
import { CabecalhoPokemonComponent } from './cabecalho-pokemon/cabecalho-pokemon.component';



@NgModule({
  declarations: [
    ListaPokemonComponent,
    CabecalhoPokemonComponent
  ],
  exports:[
    ListaPokemonComponent,
    CabecalhoPokemonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
