import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CharaktereComponent} from './charaktere.component';
import {CharaktereListComponent} from './components/charaktere-list/charaktere-list.component';
import {CharaktereSingleComponent} from './components/charaktere-single/charaktere-single.component';
import {CharaktereResolverService} from './services/charaktere-resolver.service';
import {SingleCharaktereResolverService} from './services/single-charaktere-resolver.service';

const routes: Routes = [{
  path: '',
  component: CharaktereComponent,
  children: [
    {
      path: '',
      component: CharaktereListComponent,
      resolve: {peopleList: CharaktereResolverService}
    },
    {
      path: ':id',
      component: CharaktereSingleComponent,
      resolve: {peopleItems: SingleCharaktereResolverService}
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharaktereRoutingModule {
}
