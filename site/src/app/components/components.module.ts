import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SearchComponent } from './shared/search/search.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    BreadcrumbsComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatIconModule
  ]
})
export class ComponentsModule { }
