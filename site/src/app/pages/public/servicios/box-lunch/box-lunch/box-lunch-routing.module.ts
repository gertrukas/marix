import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxLunchComponent } from './box-lunch.component';

const routes: Routes = [{ path: '', component: BoxLunchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoxLunchRoutingModule { }
