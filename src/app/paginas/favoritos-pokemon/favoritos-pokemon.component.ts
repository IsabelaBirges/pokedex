import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos-pokemon',
  templateUrl: './favoritos-pokemon.component.html',
  styleUrls: ['./favoritos-pokemon.component.scss']
})
export class FavoritosPokemonComponent implements OnInit {
  
  public pokemonFavorito: any = [];

  private storage: Storage;
  constructor() { this.storage = window.localStorage;}

  ngOnInit(): void {
    this.pegarLocalStorage();
  }

  pegarLocalStorage(){
    this.pokemonFavorito = JSON.parse(this.storage.getItem('Favoritos') as string);
  }

  imagensPokemon(url:string){
    const id = url.substring(39, url.length -1);
    let idFormatado = this.leadingZero(id);
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
