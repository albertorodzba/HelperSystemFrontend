import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { AuthModule } from './modules/auth/auth.module';

const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path:'applicant',
  loadChildren: () => import('./modules/applicant/applicant.module').then(module=> module.ApplicantModule)
},
{
  path: 'auth',
  loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
