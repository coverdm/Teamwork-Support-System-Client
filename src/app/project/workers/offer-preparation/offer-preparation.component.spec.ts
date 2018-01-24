import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPreparationComponent } from './offer-preparation.component';

describe('OfferPreparationComponent', () => {
  let component: OfferPreparationComponent;
  let fixture: ComponentFixture<OfferPreparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferPreparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
