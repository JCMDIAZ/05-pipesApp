import { Component } from '@angular/core';
import { interval, tap, timeout } from 'rxjs';
@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string = 'Carlos';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }


  //i18nPlural
  public clients: string[] = ['María','Pedro','Carlos','Fernando','Eduardo','Melissa','Natalia'];
  public clientsMap = {
    '=0': 'no hay clientes en espera.',
    '=1': 'hay un cliente en espera.',
    'other': 'hay # clientes en espera.' 
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //keyValue Pipe
  public person = {
    name: 'Carlos',
    age: 54,
    address: 'Monterrey, México'
  }

  //Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
    }, 3500);
  })
}
