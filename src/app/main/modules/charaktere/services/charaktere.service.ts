import {Injectable} from '@angular/core';
import {ApiService} from '../../../../shared/services/api.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {PeopleResponseModel} from '../../film/models/peopleResponseModel';
import {MainCategoryResponseModel} from '../../../../shared/models/main-category-response.model';

@Injectable({
  providedIn: 'root'
})

export class CharaktereService {

  singleCharaktereSubject$: BehaviorSubject<PeopleResponseModel> = new BehaviorSubject<PeopleResponseModel>(undefined);
  singleCharaktereItems$: Observable<PeopleResponseModel> = this.singleCharaktereSubject$.asObservable();

  constructor(private apiService: ApiService) {
  }

  getCharaktereList(): Observable<MainCategoryResponseModel<PeopleResponseModel>>{
    const url = 'people/';
    return this.apiService.get(url, false);
  }

  getCharaktereItems(id: number): Observable<PeopleResponseModel>{
    const url = `people/${id}/`;
    return this.apiService.get(url, false);
  }

  setPeopleDetail(obj: PeopleResponseModel): void {
    return this.singleCharaktereSubject$.next(obj);
  }
}
