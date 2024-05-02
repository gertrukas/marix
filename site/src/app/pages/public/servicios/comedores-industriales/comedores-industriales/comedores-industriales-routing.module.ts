import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComedoresIndustrialesComponent } from './comedores-industriales.component';

const routes: Routes = [{ path: '', component: ComedoresIndustrialesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComedoresIndustrialesRoutingModule { }
