import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
