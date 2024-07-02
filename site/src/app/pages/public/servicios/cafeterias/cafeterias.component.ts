import { Component } from '@angular/core';

@Component({
  selector: 'app-cafeterias',
  templateUrl: './cafeterias.component.html',
  styleUrls: ['./cafeterias.component.sass']
})
export class CafeteriasComponent {
  secondaryItem: string = 'Cafeterías';
  item: string  = 'Servicios';
  search: boolean  = false;
  titulo: string = this.item;
}
