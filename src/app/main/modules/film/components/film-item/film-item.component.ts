import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FilmResponseModel} from '../../../../../shared/models/film-response.model';
import {FindUrlPipe} from '../../../../../shared/pipes/find-url.pipe';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmItemComponent implements OnInit {
  @Input() filmItem!: FilmResponseModel;

  constructor(public findUrlPipe: FindUrlPipe) {
  }

  ngOnInit(): void {
  }

}
