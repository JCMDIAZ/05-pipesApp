import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy?: keyof Hero | '', asc: 'asc' | 'dsc' = 'asc' ): Hero[] {
    let sentido: number = (asc === 'asc') ? 1 : -1;
    switch( sortBy ) {
      case 'name': return heroes.sort( (a,b) => ( a.name > b.name ) ? sentido : sentido * -1 ); break;
      case 'canFly': return heroes.sort( (a,b) => ( a.canFly > b.canFly ) ? sentido : sentido * -1 ); break;
      case 'color': return heroes.sort( (a,b) => ( a.color > b.color ) ? sentido : sentido * -1 ); break;
      default: return heroes;
    }
  }

}
