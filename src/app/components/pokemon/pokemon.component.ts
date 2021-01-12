import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PokemonModel } from 'src/app/models/pokemon.model';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemonModel = new PokemonModel();

  constructor(private pokemonsService: PokemonsService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id != 'nuevo')
    {
      this.pokemonsService.readPokemon(id).subscribe((respuesta:PokemonModel) => 
      {
        this.pokemonModel = respuesta;
        this.pokemonModel.id = id;
      });
    }
  }

  create(form:NgForm)
  {
    if(form.invalid)
    { 
      console.log('no valido');
    }
    else
    {
      this.pokemonsService.create(this.pokemonModel).subscribe(respuesta => console.log(respuesta));
    }
    console.log(form.value)
  }

}
