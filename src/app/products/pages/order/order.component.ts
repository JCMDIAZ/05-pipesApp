import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | '' = '';
  public tipo: 'asc' | 'dsc' = 'asc'
  public ascender: boolean[] = [true, true, true];

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.yellow
    },
    {
      name: 'Linterna',
      canFly: true,
      color: Color.green
    }
  ]

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    this.orderBy = value;
    switch( value ) {
      case 'name': this.tipo = (this.ascender[0]) ? 'asc' : 'dsc'; this.ascender[0] = !this.ascender[0]; break;
      case 'canFly': this.tipo = (this.ascender[0]) ? 'asc' : 'dsc'; this.ascender[0] = !this.ascender[0]; break;
      case 'color': this.tipo = (this.ascender[0]) ? 'asc' : 'dsc'; this.ascender[0] = !this.ascender[0]; break;
    }
  }

}
