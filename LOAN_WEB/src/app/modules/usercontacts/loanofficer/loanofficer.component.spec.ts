import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanofficerComponent } from './loanofficer.component';

describe('LoanofficerComponent', () => {
  let component: LoanofficerComponent;
  let fixture: ComponentFixture<LoanofficerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanofficerComponent]
    });
    fixture = TestBed.createComponent(LoanofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
