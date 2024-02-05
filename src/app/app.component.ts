import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonService } from './services/pokemon.service';
import { Observable } from 'rxjs';
import { PokemonList } from './models/pokemonList';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  pokemonList$ = new Observable<PokemonList>();
  errorMessage = "";
  offset = 0 ;
  limit = 20;
  currentPage = 1;


  constructor(private pokemonService : PokemonService){}

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList (){
    this.pokemonList$ = this.pokemonService.getPokemonList(this.offset, this.limit);
    console.log(this.pokemonList$);
  }

}
