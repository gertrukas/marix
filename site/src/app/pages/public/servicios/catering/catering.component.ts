import { Component } from '@angular/core';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.sass']
})
export class CateringComponent {
  secondaryItem: string = 'Catering';
  item: string  = 'Servicios';
  search: boolean  = false;
  titulo: string = this.secondaryItem;
}
