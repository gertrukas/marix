import { Component } from '@angular/core';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.sass']
})
export class CertificacionesComponent {
  secondaryItem: string = 'Certificaciones';
  item: string  = 'Beneficios';
  search: boolean  = false;
  titulo: string = this.secondaryItem;
}
