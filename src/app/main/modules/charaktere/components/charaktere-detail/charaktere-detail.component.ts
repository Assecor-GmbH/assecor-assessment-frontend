import {Component, Input, OnInit} from '@angular/core';
import {PeopleResponseModel} from '../../../film/models/peopleResponseModel';

@Component({
  selector: 'app-charaktere-detail',
  templateUrl: './charaktere-detail.component.html',
  styleUrls: ['./charaktere-detail.component.scss']
})
export class CharaktereDetailComponent implements OnInit {

  @Input() peopleInfo!: PeopleResponseModel;
  constructor() { }

  ngOnInit(): void {
  }

}
