import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharaktereComponent } from './charaktere.component';

describe('CharaktereComponent', () => {
  let component: CharaktereComponent;
  let fixture: ComponentFixture<CharaktereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharaktereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharaktereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
