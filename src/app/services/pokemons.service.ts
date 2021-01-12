import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonModel } from '../models/pokemon.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  url:string = "//"; // ACA VA EL URL DE FIREBASE DE LA BASE DE DATOS

  constructor(private httpClient:HttpClient) { }

  create(pokemonModel:PokemonModel)
  {
    if(pokemonModel.id !== undefined)
    {
      return this.update(pokemonModel);
    }
    else
    {
      return this.httpClient.post(`${this.url}/pokemons.json`, pokemonModel )
        .pipe(
        map( (respuesta:any) =>
        {
          pokemonModel.id = respuesta.name;
          return pokemonModel;
        })
    );
    }
    
  }

  read()
  {
    return this.httpClient.get(`${this.url}/pokemons.json`)
            .pipe(
              map( this.crearArreglo )
            );
  }

  readPokemon(pokemonId:string)
  {
    return this.httpClient.get(`${this.url}/pokemons/${pokemonId}.json`);
  }

  update(pokemonModel:PokemonModel)

  {
    const pokemonTemp = {
      ...pokemonModel
    }
    delete pokemonTemp.id
    return this.httpClient.put(`${this.url}/pokemons/${pokemonModel.id}.json`, pokemonTemp);
  }

  delete(pokemonId:string)
  {
    return this.httpClient.delete(`${this.url}/pokemons/${pokemonId}.json`);
  }

  private crearArreglo(pokemonsObj:object)
  {
    const pokemons:PokemonModel[] = [];
    if(pokemonsObj === null)
    {
      return [];
    }
    else
    {
      Object.keys(pokemonsObj).forEach(id => {
        const pokemon:PokemonModel = pokemonsObj[id]; 
        pokemon.id = id;
        pokemons.push(pokemon);
      });
      return pokemons;
    }
  }
 
}
