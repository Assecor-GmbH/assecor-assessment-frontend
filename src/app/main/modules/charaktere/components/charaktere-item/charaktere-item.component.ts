import {Component, Input, OnInit} from '@angular/core';
import {PeopleResponseModel} from '../../../film/models/peopleResponseModel';
import {FindUrlPipe} from '../../../../../shared/pipes/find-url.pipe';

@Component({
  selector: 'app-charaktere-item',
  templateUrl: './charaktere-item.component.html',
  styleUrls: ['./charaktere-item.component.scss']
})
export class CharaktereItemComponent implements OnInit {

  @Input() peopleItem!: PeopleResponseModel;

  constructor(public findUrlPipe: FindUrlPipe) {
  }

  ngOnInit(): void {
  }

}
