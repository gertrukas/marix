import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos-especiales',
  templateUrl: './eventos-especiales.component.html',
  styleUrls: ['./eventos-especiales.component.sass']
})
export class EventosEspecialesComponent {
  secondaryItem: string = 'Eventos especiales';
  item: string  = 'Servicios';
  search: boolean  = false;
  titulo: string = this.item;
}
