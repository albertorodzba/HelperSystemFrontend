import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantRoutingModule } from './applicant-routing.module';
import { PersonalInfoFormComponent } from './components/personal-info-form/personal-info-form.component';
import { RegisterComponent } from './pages/register/register.component';
import { MedicalInfoFormComponent } from './components/medical-info-form/medical-info-form.component';
import { JobProfileFormComponent } from './components/job-profile-form/job-profile-form.spec';
import { JobHistoryAndReferenceFormComponent } from './components/job-history-and-reference/job-history-and-reference-form.component';


@NgModule({
  declarations: [
    PersonalInfoFormComponent,
    RegisterComponent,
    MedicalInfoFormComponent,
    JobProfileFormComponent,
    JobHistoryAndReferenceFormComponent  
  ],
  imports: [
    CommonModule,
    ApplicantRoutingModule,
  ],
  exports: [
  ]
})
export class ApplicantModule { }
