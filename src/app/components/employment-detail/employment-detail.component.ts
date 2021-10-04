import { Component, OnInit, Input } from '@angular/core';
import { Employment } from '../../interfaces/employment';

@Component({
  selector: 'app-employment-detail',
  templateUrl: './employment-detail.component.html',
  styleUrls: ['./employment-detail.component.scss']
})
export class EmploymentDetailComponent implements OnInit {

  @Input() employment: Employment;

  constructor() { }

  ngOnInit(): void {
  }

}
