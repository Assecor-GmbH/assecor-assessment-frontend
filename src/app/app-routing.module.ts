import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        data: {title: 'Home Page'},
        loadChildren: () => import('./main/modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'films',
        data: {title: 'Filmes'},
        loadChildren: () => import('./main/modules/film/film.module').then(m => m.FilmModule)
      },
      {
        path: 'people',
        data: {title: 'Charakteres'},
        loadChildren: () => import('./main/modules/charaktere/charaktere.module').then(m => m.CharaktereModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'top',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
