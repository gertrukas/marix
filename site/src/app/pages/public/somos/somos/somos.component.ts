import { Component } from '@angular/core';

@Component({
  selector: 'app-somos',
  templateUrl: './somos.component.html',
  styleUrls: ['./somos.component.sass']
})
export class SomosComponent {
  item: string  = 'Quienes Somos';
  search: boolean  = false;
}
