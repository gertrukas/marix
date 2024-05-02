import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CateringEventosExternosRoutingModule } from './catering-eventos-externos-routing.module';
import { CateringEventosExternosComponent } from './catering-eventos-externos.component';
import {ComponentsModule} from "../../../../../components/components.module";


@NgModule({
  declarations: [
    CateringEventosExternosComponent
  ],
    imports: [
        CommonModule,
        CateringEventosExternosRoutingModule,
        ComponentsModule
    ]
})
export class CateringEventosExternosModule { }
