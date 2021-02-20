import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmSliderComponent } from './film-slider.component';

describe('FilmSliderComponent', () => {
  let component: FilmSliderComponent;
  let fixture: ComponentFixture<FilmSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
