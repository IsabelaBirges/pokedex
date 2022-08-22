import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services-pokemon/pokemon.service';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.scss']
})
export class ListaPokemonComponent implements OnInit {

  private setPokemon: any;
  public getPokemon: any;


  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonService.listarPokemon.subscribe(
      res => {
        this.setPokemon = res.results;
        this.getPokemon = this.setPokemon;
      }
    );
  }

  public getSearch(value: string){
    const filter = this.setPokemon.filter( (resposta: any ) => {
      return !resposta.name.indexOf(value.toLowerCase());
    });

    this.getPokemon = filter;
  }

  imagemPokemon(id:number) {
    const idFormatado = this.leadingZero(id);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idFormatado}.png`;
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }


}
