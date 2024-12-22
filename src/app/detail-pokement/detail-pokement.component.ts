import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokement',
  templateUrl: './detail-pokement.component.html',
  styles: [
  ]
})
export class DetailPokementComponent implements OnInit {

  currentPokemon: Pokemon | undefined;



  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id') || '';
    console.log(id);
    this.currentPokemon = POKEMONS.find((pokemon) => pokemon.id === +id);
    console.log(this.currentPokemon);

  }
}
