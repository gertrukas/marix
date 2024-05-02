import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CateringEventosExternosComponent } from './catering-eventos-externos.component';

const routes: Routes = [{ path: '', component: CateringEventosExternosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CateringEventosExternosRoutingModule { }
