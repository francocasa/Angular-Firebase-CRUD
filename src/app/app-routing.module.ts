import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';

const routes: Routes = [
  { path: 'pokemon/:id', component:PokemonComponent},
  { path: 'pokemons', component:PokemonsComponent},
  { path: '**', pathMatch:'full', redirectTo: 'pokemons'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
