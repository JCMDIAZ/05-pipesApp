import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'manolo';
  public nameUpper: string = 'MANOLO';
  public fullName:string = 'jEsUS caRLos MaNUel díAZ';

  public customDate: Date = new Date();

}
