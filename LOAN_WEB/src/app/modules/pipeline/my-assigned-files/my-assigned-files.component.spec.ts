import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAssignedFilesComponent } from './my-assigned-files.component';

describe('MyAssignedFilesComponent', () => {
  let component: MyAssignedFilesComponent;
  let fixture: ComponentFixture<MyAssignedFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAssignedFilesComponent]
    });
    fixture = TestBed.createComponent(MyAssignedFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
