import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule, NgIf} from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    ReactiveFormsModule,
    NgIf,
    FormsModule,
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactoModule { }
