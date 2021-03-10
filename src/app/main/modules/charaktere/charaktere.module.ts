import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharaktereComponent} from './charaktere.component';
import {CharaktereListComponent} from './components/charaktere-list/charaktere-list.component';
import {CharaktereSingleComponent} from './components/charaktere-single/charaktere-single.component';
import {CharaktereItemComponent} from './components/charaktere-item/charaktere-item.component';
import {CharaktereDetailComponent} from './components/charaktere-detail/charaktere-detail.component';
import {CharaktereRoutingModule} from './charakere-routing.module';
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
  declarations: [
    CharaktereComponent,
    CharaktereListComponent,
    CharaktereSingleComponent,
    CharaktereItemComponent,
    CharaktereDetailComponent,
  ],
  imports: [
    CharaktereRoutingModule,
    SharedModule,
    CommonModule
  ],
})
export class CharaktereModule {
}
