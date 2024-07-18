import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent {

  mensaje = {
    nombre: 'el nombre',
    correo: '',
    telefono: '',
    comentario: ''
  }

  constructor() {}

    ngOnInit(): void{

  }


}


