import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CvComponent } from './components/cv/cv.component';
import { EducationComponent } from './components/education/education.component';
import { EmploymentComponent } from './components/employment/employment.component';




const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cv', component: CvComponent},  
  { path: 'employment', component: EmploymentComponent},
  { path: 'education', component: EducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
