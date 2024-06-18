import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./main/main.module').then(m => m.MainModule)
      },
      {
        path: 'resultados',
        loadChildren: () => import('./results/results.module').then(m => m.ResultsModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
      },
      { path: 'aviso-de-privacidad',
        loadChildren: () => import('./aviso/aviso-de-privacidad/aviso-de-privacidad.module').then(m => m.AvisoDePrivacidadModule)
      },
      {
        path: 'somos',
        loadChildren: () => import('./somos/somos/somos.module').then(m => m.SomosModule)
      },
      {
        path: 'servicios/box-lunch',
        loadChildren: () => import('./servicios/box-lunch/box-lunch/box-lunch.module').then(m => m.BoxLunchModule)
      },
      {
        path: 'servicios/catering-eventos-externos',
        loadChildren: () => import('./servicios/catering-eventos-externos/catering-eventos-externos/catering-eventos-externos.module').then(m => m.CateringEventosExternosModule)
      },
      {
        path: 'productos',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'servicios/comedor-empresarial',
        loadChildren: () => import('./servicios/comedor-empresarial/comedor-empresarial.module').then(m => m.ComedorEmpresarialModule)
      },
      {
        path: 'servicios/eventos-especiales',
        loadChildren: () => import('./servicios/eventos-especiales/eventos-especiales.module').then(m => m.EventosEspecialesModule)
      },

    ]
  },








];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
