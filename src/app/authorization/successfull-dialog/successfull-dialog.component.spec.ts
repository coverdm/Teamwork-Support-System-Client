import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullDialogComponent } from './successfull-dialog.component';

describe('SuccessfullDialogComponent', () => {
  let component: SuccessfullDialogComponent;
  let fixture: ComponentFixture<SuccessfullDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfullDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfullDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
