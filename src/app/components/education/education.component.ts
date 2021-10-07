import { Component, OnInit } from '@angular/core';
import { Education } from '../../interfaces/education';
import { EDUCATIONS } from '../../data/mock-education';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educations = EDUCATIONS;
  
  selectedEducation: Education;

  constructor(
    //private educationService: EducationService
  ) { }

  ngOnInit(): void {
    //this.getEducations();
  }

  onSelect(education: Education): void {
    this.selectedEducation = education;
  }

  /* getEducations(): void {
    this.educations = this.educationService.getEducations();
  } */

  /* getEducations(): void {
    this.educationService.getEducations()
    .subscribe(educations => this.educations = educations);
  } */

}
