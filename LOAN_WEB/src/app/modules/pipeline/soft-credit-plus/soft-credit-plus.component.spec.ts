import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftCreditPlusComponent } from './soft-credit-plus.component';

describe('SoftCreditPlusComponent', () => {
  let component: SoftCreditPlusComponent;
  let fixture: ComponentFixture<SoftCreditPlusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoftCreditPlusComponent]
    });
    fixture = TestBed.createComponent(SoftCreditPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
