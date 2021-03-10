import {Component, OnInit} from '@angular/core';
import {PeopleResponseModel} from '../../../film/models/peopleResponseModel';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {CharaktereService} from '../../services/charaktere.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {FilmService} from '../../../film/services/film.service';
import {Title} from '@angular/platform-browser';

@UntilDestroy()
@Component({
  selector: 'app-charaktere-single',
  templateUrl: './charaktere-single.component.html',
  styleUrls: ['./charaktere-single.component.scss']
})
export class CharaktereSingleComponent implements OnInit {

  CharaktereDeatil = 'Charaktere Deatils';
  singleCharaktereItems$!: Observable<PeopleResponseModel>;
  categoryList = [
    {
      categoryName: 'films',
      categoryItem: 'Film'
    },
    {
      categoryName: 'starships',
      categoryItem: 'starship'
    },
    {
      categoryName: 'Species',
      categoryItem: 'Specie '
    },
    {
      categoryName: 'vehicles',
      categoryItem: 'vehicle '
    },
  ];

  sliderItems = [
    {
      imgUrl: 'assets/images/slider_02.jpg'
    },
    {
      imgUrl: 'assets/images/slider_02.jpg',
    },
    {
      imgUrl: 'assets/images/slider_02.jpg',
    }
  ];
  constructor(private activatedRoute: ActivatedRoute,
              private charaktereService: CharaktereService,
              private titleService: Title) {
    this.singleCharaktereItems$ = this.charaktereService.singleCharaktereItems$;
  }

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(untilDestroyed(this))
      .subscribe(res => {
        this.charaktereService.setPeopleDetail(res.peopleItems);
        this.titleService.setTitle(`Charaktere | ${res.peopleItems.name}`);
      });
  }

}
