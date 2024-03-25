import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBackOfficeuserComponent } from './create-back-officeuser.component';

describe('CreateBackOfficeuserComponent', () => {
  let component: CreateBackOfficeuserComponent;
  let fixture: ComponentFixture<CreateBackOfficeuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBackOfficeuserComponent]
    });
    fixture = TestBed.createComponent(CreateBackOfficeuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
