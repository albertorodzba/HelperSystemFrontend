import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoFormComponent } from './personal-info-form.component';

describe('ApplicantInfoFormComponent', () => {
  let component: PersonalInfoFormComponent;
  let fixture: ComponentFixture<PersonalInfoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalInfoFormComponent]
    });
    fixture = TestBed.createComponent(PersonalInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
