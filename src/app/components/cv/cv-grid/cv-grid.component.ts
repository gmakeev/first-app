import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-cv-grid',
  templateUrl: './cv-grid.component.html',
  styleUrls: ['./cv-grid.component.scss']
})
export class CvGridComponent implements OnInit {

  tileColor: 'lightblue';

  tiles: Tile[] = [
    {text: 'SoftServe', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Photo', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Firstname, Surname', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Gregoriy Makeev', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: '<ng-container><img src="../../../../assets/img/person/img1.jpg"><ng-container>', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: '', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: '', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: '', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: '', cols: 2, rows: 1, color: '#DDBDF1'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
