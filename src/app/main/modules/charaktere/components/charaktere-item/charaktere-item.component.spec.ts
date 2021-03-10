import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharaktereItemComponent } from './charaktere-item.component';

describe('CharaktereItemComponent', () => {
  let component: CharaktereItemComponent;
  let fixture: ComponentFixture<CharaktereItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharaktereItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharaktereItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
