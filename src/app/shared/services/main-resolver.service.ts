import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainResolverService{

  constructor() {
  }
}
// export class MainResolverService implements Resolve<ResponseModel<Bootstrapper>> {
//
//   constructor(private mainService: MainService) {
//   }
//
//
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
//     return this.mainService.getBootstrapperData()
//       .pipe(
//         map((response) => {
//           return response;
//         })
//       );
//   }
// }
