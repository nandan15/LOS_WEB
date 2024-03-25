import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOfficelistComponent } from './back-officelist.component';

describe('BackOfficelistComponent', () => {
  let component: BackOfficelistComponent;
  let fixture: ComponentFixture<BackOfficelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackOfficelistComponent]
    });
    fixture = TestBed.createComponent(BackOfficelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
