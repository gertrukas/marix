import { Component } from '@angular/core';

@Component({
  selector: 'app-bolsa-de-trabajo',
  templateUrl: './bolsa-de-trabajo.component.html',
  styleUrls: ['./bolsa-de-trabajo.component.sass']
})
export class BolsaDeTrabajoComponent {
  secondaryItem: string = 'Bolsa de trabajo';
  item: string  = 'Bolsa de trabajo';
  search: boolean  = false;
  titulo: string = this.secondaryItem;
}
