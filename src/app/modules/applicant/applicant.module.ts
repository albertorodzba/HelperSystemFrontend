import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantRoutingModule } from './applicant-routing.module';
import { PersonalInfoFormComponent } from './components/personal-info-form/personal-info-form.component';
import { ApplicantRegisterComponent } from './pages/applicant-register/applicant-register.component';
import { MedicalInfoFormComponent } from './components/medical-info-form/medical-info-form.component';
import { WorkPreferencesFormComponent } from './components/work-preferences-form/work-preferences-form.component';
import { WorkExperienceReferencesFormComponent } from './components/work-experience-references-form/work-experience-references-form.component';


@NgModule({
  declarations: [
    PersonalInfoFormComponent,
    ApplicantRegisterComponent,
    MedicalInfoFormComponent,
    WorkPreferencesFormComponent,
    WorkExperienceReferencesFormComponent  
  ],
  imports: [
    CommonModule,
    ApplicantRoutingModule,
  ],
  exports: [
  ]
})
export class ApplicantModule { }
