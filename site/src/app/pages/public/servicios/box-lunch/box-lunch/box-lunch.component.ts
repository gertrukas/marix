import { Component } from '@angular/core';

@Component({
  selector: 'app-box-lunch',
  templateUrl: './box-lunch.component.html',
  styleUrls: ['./box-lunch.component.sass']
})
export class BoxLunchComponent {
  secondaryItem: string = 'EL Box Lunch ';
  item: string  = 'Servicios';
  search: boolean  = false;
}
