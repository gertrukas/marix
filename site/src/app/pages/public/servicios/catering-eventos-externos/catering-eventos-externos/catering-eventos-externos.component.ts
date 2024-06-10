import { Component } from '@angular/core';

@Component({
  selector: 'app-catering-eventos-externos',
  templateUrl: './catering-eventos-externos.component.html',
  styleUrls: ['./catering-eventos-externos.component.sass']
})
export class CateringEventosExternosComponent {
  secondaryItem: string = 'Catering eventos externos';
  item: string  = 'Servicios';
  search: boolean  = false;
  titulo: string = this.item;
}
