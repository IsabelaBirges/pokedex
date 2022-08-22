import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokemonService } from 'src/app/services-pokemon/pokemon.service';

@Component({
  selector: 'app-caracteristicas-pokemon',
  templateUrl: './caracteristicas-pokemon.component.html',
  styleUrls: ['./caracteristicas-pokemon.component.scss'],
})
export class CaracteristicasPokemonComponent implements OnInit {
  
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlNome: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public botaoFavorito: boolean = false;
  public pokemon: any;
  public carregarPokemon: boolean = false;
  private storage: Storage;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) {
    this.storage = window.localStorage;
  }

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon() {
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokemonService.pegarPokemon(
      `${this.urlPokemon}/${id}`
    );
    const nomePokemon = this.pokemonService.pegarPokemon(`${this.urlNome}/${id}`);

    return forkJoin([pokemon, nomePokemon]).subscribe(
      (resposta) => {
        this.pokemon = resposta;
        this.carregarPokemon = true;
      }
    );
  }

  adicionarFavoritos(key: string, value: any){
    this.botaoFavorito = true;
    const pokemonFavorito = {key, value};

    if(this.storage.getItem('Favoritos') === null){
      this.storage.setItem('Favoritos', JSON.stringify([pokemonFavorito]));
    } else{
      this.storage.setItem(
        'Favoritos',
        JSON.stringify([
          ...JSON.parse(this.storage.getItem('Favoritos' ) as string)|| [],
          pokemonFavorito
        ])
      );
    }

   
  }

  imagemPokemon(id: number) {
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
