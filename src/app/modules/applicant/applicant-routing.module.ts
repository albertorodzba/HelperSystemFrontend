import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantRegisterComponent } from './pages/applicant-register/applicant-register.component';

const routes: Routes = [
  {
    path:'register',
    component: ApplicantRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule { }
