import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonService } from './services/pokemon.service';
import { Observable } from 'rxjs';
import { PokemonList } from './models/pokemonList';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
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
  }

  previous(){
    //if(this.offset >= 0) return;

    this.offset -= 20;
    this.currentPage = this.offset / this.limit;
    console.log(this.offset)

    this.pokemonList$ = this.pokemonService.getPokemonList(this.offset, this.limit);

  }
  next(){
    //if(this.offset >= 0) return;

    this.offset += 20;
    this.currentPage = this.offset / this.limit;
    console.log(this.offset)

    this.pokemonList$ = this.pokemonService.getPokemonList(this.offset, this.limit);

  }

}
