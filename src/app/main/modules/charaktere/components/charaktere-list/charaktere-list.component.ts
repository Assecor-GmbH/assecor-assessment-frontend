import {Component, OnInit} from '@angular/core';
import {PeopleResponseModel} from '../../../film/models/peopleResponseModel';
import {ActivatedRoute} from '@angular/router';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-charaktere-list',
  templateUrl: './charaktere-list.component.html',
  styleUrls: ['./charaktere-list.component.scss']
})
export class CharaktereListComponent implements OnInit {
  pageTitle = 'Charaktere';
  peopleList!: PeopleResponseModel[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(untilDestroyed(this))
      .subscribe(res => {
        this.peopleList = res.peopleList.results;
      });
  }

}
