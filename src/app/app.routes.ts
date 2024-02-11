import { Routes } from '@angular/router';
import { PokemonComponent } from './component/pokemon/pokemon.component';

export const routes: Routes = [
    {path: "detailsPokemon/:namePokemon", component: PokemonComponent}
];
