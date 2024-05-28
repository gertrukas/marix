import { Component } from '@angular/core';

@Component({
  selector: 'app-comedores-industriales',
  templateUrl: './comedores-industriales.component.html',
  styleUrls: ['./comedores-industriales.component.sass']
})
export class ComedoresIndustrialesComponent {

  secondaryItem: string = 'Comedores Industriales';
  item: string  = 'Servicios';
  search: boolean  = false;

}
