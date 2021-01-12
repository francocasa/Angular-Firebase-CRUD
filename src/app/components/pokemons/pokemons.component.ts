import { Component, OnInit } from '@angular/core';
import { PokemonModel } from 'src/app/models/pokemon.model';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons:PokemonModel[] = [];

  constructor(private pokemonsService:PokemonsService) { }

  ngOnInit(): void {
    this.pokemonsService.read().subscribe(respuesta => this.pokemons = respuesta );
  }
  
  delete(pokemonId:string, index:number)
  {
    this.pokemons.splice(index, 1);
    this.pokemonsService.delete(pokemonId).subscribe();
  }

}
