import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxLunchRoutingModule } from './box-lunch-routing.module';
import { BoxLunchComponent } from './box-lunch.component';
import {ComponentsModule} from "../../../../../components/components.module";


@NgModule({
  declarations: [
    BoxLunchComponent
  ],
  imports: [
    CommonModule,
    BoxLunchRoutingModule,
    ComponentsModule
  ]
})
export class BoxLunchModule { }
