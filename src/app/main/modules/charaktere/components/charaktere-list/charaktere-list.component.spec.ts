import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharaktereListComponent } from './charaktere-list.component';

describe('CharaktereListComponent', () => {
  let component: CharaktereListComponent;
  let fixture: ComponentFixture<CharaktereListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharaktereListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharaktereListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
