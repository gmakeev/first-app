import { Component, OnInit, Input } from '@angular/core';
import { Education } from '../../interfaces/education';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.scss']
})
export class EducationDetailComponent implements OnInit {

  @Input() education: Education;

  constructor() { }

  ngOnInit(): void {
  }

}
