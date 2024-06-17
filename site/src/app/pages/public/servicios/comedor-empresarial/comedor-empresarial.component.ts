import { Component } from '@angular/core';

@Component({
  selector: 'app-comedor-empresarial',
  templateUrl: './comedor-empresarial.component.html',
  styleUrls: ['./comedor-empresarial.component.sass']
})
export class ComedorEmpresarialComponent {
  secondaryItem: string = 'Comedor empresarial';
  item: string  = 'Servicios';
  search: boolean  = false;
  titulo: string = this.item;
}
