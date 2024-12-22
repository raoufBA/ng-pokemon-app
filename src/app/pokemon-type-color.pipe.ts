import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string = '';

    switch (type) {
      case 'Fire':
        color = 'lighten-1 red';
        break;
      case 'Water':
        color = 'lighten-1 blue';
        break;
      case 'Grass':
        color = 'lighten-1 green';
        break;
      case 'Electric':
        color = 'lighten-1 yellow';
        break;
      case 'Ice':
        color = 'lighten-1 light-blue';
        break;
      case 'Fighting':
        color = 'lighten-1 orange';
        break;
      case 'Poison':
        color = 'accent-1 purple';
        break;
      case 'Ground':
        color = 'lighten-1 brown';
        break;
      case 'Flying':
        color = 'lighten-1 grey';
        break;
      case 'psychic':
        color = 'lighten-1 pink';
        break;
      case 'Bug':
        color = 'lighten-1 lime';
        break;
      case 'Rock':
        color = 'lighten-1 grey';
        break;
      case 'Ghost':
        color = 'lighten-1 deep-purple';
        break;
      case 'Dragon':
        color = 'lighten-1 indigo';
        break;
      case 'Dark':
        color = 'lighten-1 black';
        break;
      case 'Steel':
        color = 'lighten-1 blue-grey';
        break;
      case 'Fairy':
        color = 'lighten-1 light-pink';
        break;
      default:
        color = 'lighten-1';
        break;
    }

    return color;
  }

}
