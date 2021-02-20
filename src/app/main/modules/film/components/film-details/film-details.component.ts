import {Component, Input, OnInit} from '@angular/core';
import {FilmResponseModel} from '../../../../../shared/models/film-response.model';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {

  @Input() filmInfo!: FilmResponseModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
