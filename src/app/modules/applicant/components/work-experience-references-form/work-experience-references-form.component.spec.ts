import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceReferencesFormComponent } from './work-experience-references-form.component';

describe('WorkExperienceReferencesComponent', () => {
  let component: WorkExperienceReferencesFormComponent;
  let fixture: ComponentFixture<WorkExperienceReferencesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkExperienceReferencesFormComponent]
    });
    fixture = TestBed.createComponent(WorkExperienceReferencesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
