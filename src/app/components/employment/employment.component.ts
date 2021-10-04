import { Component, OnInit } from '@angular/core';
import { Employment } from '../../interfaces/employment';
import { EMPLOYMENTS } from '../../data/mock-employment';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent implements OnInit {

  /* employment: Employment = {
    id: 1,
    yearFrom: 2003,
    yearTill: 2012,
    nameCompany: 'Raiffeisen Bank Aval',
    position: 'Engineer technologist'
  } */
  employments = EMPLOYMENTS;
  selectedEmployment: Employment;


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(employment: Employment): void {
    this.selectedEmployment = employment;
  }

}
