import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SearchComponent } from './shared/search/search.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { ServiciosBeneficiosComponent } from './shared/servicios-beneficios/servicios-beneficios.component';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {RouterLink} from "@angular/router";
import { AlianzasComponent } from './shared/alianzas/alianzas.component';




@NgModule({
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    SearchComponent,
    ServiciosBeneficiosComponent,
    AlianzasComponent,

  ],
  exports: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    SearchComponent,
    ServiciosBeneficiosComponent,
    AlianzasComponent,
  ],
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        RouterLink
    ]
})
export class ComponentsModule { }
