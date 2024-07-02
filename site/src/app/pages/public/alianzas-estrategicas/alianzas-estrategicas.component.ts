import { Component } from '@angular/core';

@Component({
  selector: 'app-alianzas-estrategicas',
  templateUrl: './alianzas-estrategicas.component.html',
  styleUrls: ['./alianzas-estrategicas.component.sass']
})
export class AlianzasEstrategicasComponent {
  secondaryItem: string = 'Alianzas estratégicas';
  item: string  = 'Beneficios';
  search: boolean  = false;
  titulo: string = this.secondaryItem;
}
