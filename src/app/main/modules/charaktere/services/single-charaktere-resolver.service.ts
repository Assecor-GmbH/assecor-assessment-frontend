import {Injectable} from '@angular/core';
import {CharaktereService} from './charaktere.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PeopleResponseModel} from '../../film/models/peopleResponseModel';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SingleCharaktereResolverService implements Resolve<PeopleResponseModel> {

  constructor(private charaktereService: CharaktereService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PeopleResponseModel> | Promise<PeopleResponseModel> | PeopleResponseModel {

    const peopleId = route.params.id;
    return this.charaktereService.getCharaktereItems(peopleId)
      .pipe(
        map(res => {
          console.log(res);
          return res;
        })
      );
  }
}
