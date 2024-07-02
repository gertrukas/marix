import { Component } from '@angular/core';

@Component({
  selector: 'app-desarrollo-de-proyectos',
  templateUrl: './desarrollo-de-proyectos.component.html',
  styleUrls: ['./desarrollo-de-proyectos.component.sass']
})
export class DesarrolloDeProyectosComponent {
  secondaryItem: string = 'Desarrollo de proyectos';
  item: string  = 'Servicios';
  search: boolean  = false;
  titulo: string = this.secondaryItem;
}
