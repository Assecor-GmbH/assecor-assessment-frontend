import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilmComponent} from './film.component';
import {FilmRoutingModule} from './film-routing.module';
import {FilmListComponent} from './components/film-list/film-list.component';
import {FilmItemComponent} from './components/film-item/film-item.component';
import {FilmSingleComponent} from './components/film-single/film-single.component';
import {FindUrlPipe} from '../../../shared/pipes/find-url.pipe';
import {FilmSliderComponent} from './components/film-slider/film-slider.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {FilmDetailsComponent} from './components/film-details/film-details.component';
import {CategoryListComponent} from '../../../shared/components/category-list/category-list.component';

@NgModule({
  declarations: [
    FilmComponent,
    FilmListComponent,
    FilmItemComponent,
    FilmSingleComponent,
    FindUrlPipe,
    FilmSliderComponent,
    FilmDetailsComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    FilmRoutingModule,
    SlickCarouselModule
  ],
  providers: [FindUrlPipe]
})

export class FilmModule {
}
