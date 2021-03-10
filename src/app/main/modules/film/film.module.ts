import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilmComponent} from './film.component';
import {FilmRoutingModule} from './film-routing.module';
import {FilmListComponent} from './components/film-list/film-list.component';
import {FilmItemComponent} from './components/film-item/film-item.component';
import {FilmSingleComponent} from './components/film-single/film-single.component';
import {FilmDetailsComponent} from './components/film-details/film-details.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [
    FilmComponent,
    FilmListComponent,
    FilmItemComponent,
    FilmSingleComponent,
    FilmDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FilmRoutingModule
  ],
})

export class FilmModule {
}
