import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EducationComponent } from './components/education/education.component';
import { EmploymentComponent } from './components/employment/employment.component';
import { EmploymentDetailComponent } from './components/employment-detail/employment-detail.component';
import { EducationDetailComponent } from './components/education-detail/education-detail.component';
import { HomeComponent } from './components/home/home.component';
import { CvComponent } from './components/cv/cv.component';
import { CvTableComponent } from './components/cv/cv-table/cv-table.component';
import { CvGridComponent } from './components/cv/cv-grid/cv-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    EmploymentComponent,
    EmploymentDetailComponent,
    EducationDetailComponent,
    HomeComponent,
    CvComponent,
    CvTableComponent,
    CvGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,    
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
