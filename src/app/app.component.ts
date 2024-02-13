import { Component, Inject, OnInit } from '@angular/core';
import { Route, Router, RouterOutlet } from '@angular/router';
import { PokemonService } from './services/pokemon.service';
import { Observable, map, tap } from 'rxjs';
import { PokemonList, Result } from './models/pokemonList';
import { AsyncPipe } from '@angular/common';
import { Pokemon } from './models/pokemon';
import { PokemonComponent } from './component/pokemon/pokemon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, PokemonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  pokemonList$! : Observable<PokemonList>;
  pokemon$ = new Observable<Pokemon>();

  errorMessage = "";
  offset = 0;
  limit = 12;
  currentPage = 1;


  constructor(private pokemonService: PokemonService, private router : Router) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokemonList$ = this.pokemonService.getPokemonList(this.offset, this.limit);
    console.log(this.pokemonList$);
  }


  getDetailsPokemon(poke : Result){
    this.pokemon$ = this.pokemonService.getPokemonByUrl(poke).pipe(map(res => {
      console.log(res); return res
    }))
    this.router.navigate(['detailsPokemon/', poke.name]);
    
    
  }




  previous() {
    this.currentPage -= 1;

    if (this.currentPage == 0) {
      this.currentPage = 1;

    } else {
      this.offset -= this.limit;
      this.pokemonList$ = this.pokemonService.getPokemonList(this.offset, this.limit);
      //this.currentPage = this.offset / this.limit;
    }
  }
  next() {

    this.offset += this.limit;
    console.log(this.offset)

    this.pokemonList$ = this.pokemonService.getPokemonList(this.offset, this.limit);
    //this.currentPage =this.offset / this.limit;
    this.currentPage += 1;

  }

}
