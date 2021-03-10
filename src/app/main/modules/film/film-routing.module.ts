import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FilmComponent} from './film.component';
import {FilmResolverService} from './services/film-resolver.service';
import {FilmListComponent} from './components/film-list/film-list.component';
import {FilmSingleComponent} from './components/film-single/film-single.component';
import {SingleFilmResolverService} from './services/single-film-resolver.service';

const routes: Routes = [{
  path: '',
  component: FilmComponent,
  children: [
    {
      path: '',
      component: FilmListComponent,
      resolve: {filmList: FilmResolverService}
    },
    {
      path: ':id',
      component: FilmSingleComponent,
      resolve: {filmItems: SingleFilmResolverService}
    }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmRoutingModule {
}
