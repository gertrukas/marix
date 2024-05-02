import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComedoresIndustrialesRoutingModule } from './comedores-industriales-routing.module';
import { ComedoresIndustrialesComponent } from './comedores-industriales.component';
import {ComponentsModule} from "../../../../../components/components.module";


@NgModule({
  declarations: [
    ComedoresIndustrialesComponent
  ],
    imports: [
        CommonModule,
        ComedoresIndustrialesRoutingModule,
        ComponentsModule
    ]
})
export class ComedoresIndustrialesModule { }
