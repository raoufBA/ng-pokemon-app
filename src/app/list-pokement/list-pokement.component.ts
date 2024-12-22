import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';

@Component({
  selector: 'app-list-pokement',
  templateUrl: 'list-pokement.component.html',
  styles: [
  ]
})
export class ListPokementComponent {
  pokemons: Pokemon[] = [];

  currentPokemon: Pokemon | undefined;

  mesgError: string = '';

  ngOnInit() {
    this.pokemons = POKEMONS;
    console.table(this.pokemons);
  }

  selectPokimon(index: string) {
    //const index: number = +(event.target as HTMLInputElement).value;
    if (!index) {
      return
    }

    this.currentPokemon = this.pokemons.find((pokemon) => pokemon.id === +index);
    if (this.currentPokemon) {
      this.mesgError = '';
    }
    else {
      this.mesgError = `Pokemon not found`;
    }
  }
}
