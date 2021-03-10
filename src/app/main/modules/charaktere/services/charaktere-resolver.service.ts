import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {MainCategoryResponseModel} from '../../../../shared/models/main-category-response.model';
import {PeopleResponseModel} from '../../film/models/peopleResponseModel';
import {CharaktereService} from './charaktere.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharaktereResolverService implements Resolve<MainCategoryResponseModel<PeopleResponseModel>> {

  constructor(private charaktereService: CharaktereService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MainCategoryResponseModel<PeopleResponseModel>> | Promise<MainCategoryResponseModel<PeopleResponseModel>> | MainCategoryResponseModel<PeopleResponseModel> {

    return this.charaktereService.getCharaktereList()
      .pipe(
        map(res => {
          console.log(res);
          return res;
        })
      );
  }
}
