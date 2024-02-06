import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonList } from '../models/pokemonList';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http : HttpClient) { }

  getPokemonList(offset : number, limit : number){
    return this.http.get<PokemonList>(`${this.baseUrl}`+`?offset=${offset}&limit=${limit}`);
  }

  getPokemonByUrl <Pokemon>(url : string){
    return this.http.get(url);
  }





}
