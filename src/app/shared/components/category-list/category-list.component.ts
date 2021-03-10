import {Component, Input, OnInit} from '@angular/core';
import {FindUrlPipe} from '../../pipes/find-url.pipe';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  @Input() categoryTitle!: {categoryName: string, categoryItem: string };
  @Input() categoryList!: [];
  constructor(public findUrlPipe: FindUrlPipe) { }

  ngOnInit(): void {
  }

}
