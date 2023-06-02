import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobHistoryAndReferenceFormComponent } from './job-history-and-reference-form.component';

describe('JobHistoryAndReferenceComponent', () => {
  let component: JobHistoryAndReferenceFormComponent;
  let fixture: ComponentFixture<JobHistoryAndReferenceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobHistoryAndReferenceFormComponent]
    });
    fixture = TestBed.createComponent(JobHistoryAndReferenceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
