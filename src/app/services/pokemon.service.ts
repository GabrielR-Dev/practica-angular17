import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonList, Result } from '../models/pokemonList';
import { Pokemon } from '../models/pokemon';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http : HttpClient) { }

  getPokemonList(offset : number, limit : number){
    return this.http.get<PokemonList>(`${this.baseUrl}`+`?offset=${offset}&limit=${limit}`);
  }

  getPokemonByUrl (poke : Result){

    return this.http.get<Pokemon>(poke.url);
  }





}
