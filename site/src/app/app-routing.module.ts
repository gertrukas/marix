import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./pages/public/public.module').then(m => m.PublicModule) 
  },
  { 
    path: 'errors', 
    loadChildren: () => import('./pages/errors/errors.module').then(m => m.ErrorsModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
