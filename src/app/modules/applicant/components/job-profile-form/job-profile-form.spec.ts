import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobProfileFormComponent } from './job-profile-form.component';

describe('JobProfileComponent', () => {
  let component: JobProfileFormComponent;
  let fixture: ComponentFixture<JobProfileFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobProfileFormComponent]
    });
    fixture = TestBed.createComponent(JobProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
