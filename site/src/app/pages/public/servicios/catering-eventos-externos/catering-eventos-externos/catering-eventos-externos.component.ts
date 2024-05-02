import { Component } from '@angular/core';

@Component({
  selector: 'app-catering-eventos-externos',
  templateUrl: './catering-eventos-externos.component.html',
  styleUrls: ['./catering-eventos-externos.component.sass']
})
export class CateringEventosExternosComponent {
  secondaryItem: string = 'Servicios';
  item: string  = 'Catering eventos externos';
  search: boolean  = false;
  titulo: string = this.item;
}
