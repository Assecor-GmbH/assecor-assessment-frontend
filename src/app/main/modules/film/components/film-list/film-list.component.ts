import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FilmResponseModel} from '../../../../../shared/models/film-response.model';
import {ActivatedRoute} from '@angular/router';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class FilmListComponent implements OnInit {
  pageTitle = 'Filme';
  filmList!: FilmResponseModel[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(untilDestroyed(this))
      .subscribe(res => {
        this.filmList = res.filmList.results;
      });
  }

}
