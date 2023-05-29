import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path:'applicant',
  loadChildren: () => import('./modules/applicant/applicant.module').then(module=> module.ApplicantModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
