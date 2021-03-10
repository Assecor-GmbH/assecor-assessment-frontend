import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharaktereDetailComponent } from './charaktere-detail.component';

describe('CharaktereDetailComponent', () => {
  let component: CharaktereDetailComponent;
  let fixture: ComponentFixture<CharaktereDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharaktereDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharaktereDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
