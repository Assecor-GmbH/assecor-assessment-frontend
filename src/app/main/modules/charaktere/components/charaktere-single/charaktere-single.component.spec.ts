import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharaktereSingleComponent } from './charaktere-single.component';

describe('CharaktereSingleComponent', () => {
  let component: CharaktereSingleComponent;
  let fixture: ComponentFixture<CharaktereSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharaktereSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharaktereSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
