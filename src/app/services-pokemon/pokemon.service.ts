import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  constructor(private httpClient: HttpClient) {
   }

  get listarPokemon():Observable<any>{
    return this.httpClient.get<any>(this.url).pipe(
      tap(resposta => resposta), 
      tap(resposta => {
       resposta.results.map((pokemon:any) => {
        this.pegarPokemon(pokemon.url).subscribe(
          resposta => pokemon.status = resposta
        )
       })
    }))
  }

  public pegarPokemon(url:string):Observable<any>{
    return this.httpClient.get<any>(url).pipe(
      map(resposta => resposta)
    )
  }


}
