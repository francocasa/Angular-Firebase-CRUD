import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';

import { FormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
