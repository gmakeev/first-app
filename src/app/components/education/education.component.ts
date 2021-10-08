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

  constructor(  ) { }

  ngOnInit(): void {
  }

  onSelect(education: Education): void {
    this.selectedEducation = education;
  }
  
}
