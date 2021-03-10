import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {FilmResponseModel} from '../../../../shared/models/film-response.model';
import {Observable} from 'rxjs';
import {FilmService} from './film.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SingleFilmResolverService implements Resolve<FilmResponseModel> {

  constructor(private filmService: FilmService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FilmResponseModel> | Promise<FilmResponseModel> | FilmResponseModel {
    const filmId = route.params.id;

    return this.filmService.getFilmItems(filmId)
      .pipe(
        map(res => {
          return res;
        })
      );
  }
}
