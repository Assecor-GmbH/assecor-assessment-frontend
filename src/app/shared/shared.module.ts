import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {FindUrlPipe} from './pipes/find-url.pipe';
import {SliderComponent} from './components/slider/slider.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SlickCarouselModule
  ],
  declarations: [
    CategoryListComponent,
    SliderComponent
  ],
  exports: [
    CategoryListComponent,
    SliderComponent
  ],
  providers: [FindUrlPipe]
})

export class SharedModule {
}
