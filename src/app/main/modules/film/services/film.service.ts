import {Injectable} from '@angular/core';
import {ApiService} from '../../../../shared/services/api.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {MainCategoryResponseModel} from '../../../../shared/models/main-category-response.model';
import {FilmResponseModel} from '../../../../shared/models/film-response.model';
@Injectable({
  providedIn: 'root'
})

export class FilmService {

  singleFilmSubject$: BehaviorSubject<FilmResponseModel> = new BehaviorSubject<FilmResponseModel>(undefined);
  singleFilmItems$: Observable<FilmResponseModel> = this.singleFilmSubject$.asObservable();

  constructor(private apiService: ApiService) {
  }

  getFilmList(): Observable<MainCategoryResponseModel<FilmResponseModel>>{
    const url = 'films/';
    return this.apiService.get(url, false);
  }

  getFilmItems(id: number): Observable<FilmResponseModel>{
    const url = `films/${id}/`;
    return this.apiService.get(url, false);
  }

  setFilmDetail(obj: FilmResponseModel): void {
    return this.singleFilmSubject$.next(obj);
  }
}
