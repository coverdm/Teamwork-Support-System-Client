import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireformComponent } from './hireform.component';

describe('HireformComponent', () => {
  let component: HireformComponent;
  let fixture: ComponentFixture<HireformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
