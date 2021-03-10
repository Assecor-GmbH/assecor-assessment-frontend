import {Injectable} from '@angular/core';
import {MainCategoryResponseModel} from '../../../../shared/models/main-category-response.model';
import {FilmResponseModel} from '../../../../shared/models/film-response.model';
import {FilmService} from './film.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmResolverService implements Resolve<MainCategoryResponseModel<FilmResponseModel>> {

  constructor(private filmService: FilmService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MainCategoryResponseModel<FilmResponseModel>> | Promise<MainCategoryResponseModel<FilmResponseModel>> | MainCategoryResponseModel<FilmResponseModel> {

    return this.filmService.getFilmList()
      .pipe(
        map(res => {
          console.log(res);
          return res;
        })
      );
  }

}
