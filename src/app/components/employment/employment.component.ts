import { Component, OnInit } from '@angular/core';
import { Employment } from '../../interfaces/employment';
import { EMPLOYMENTS } from '../../data/mock-employment';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent implements OnInit {

  employments = EMPLOYMENTS;
  selectedEmployment: Employment;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(employment: Employment): void {
    this.selectedEmployment = employment;
  }

}
