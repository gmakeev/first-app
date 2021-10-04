import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  //weight: number;
  symbol: string;
}

/* const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
]; */

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'SoftServe', symbol: `<a href="#"><img src="../..../../assets/img/person/img1.jpg" alt="Photo"></a>`},
  {position: 2, name: 'firstname, Surname', symbol: 'Gregoriy Makeev'},
  {position: 3, name: 'Contact information',  symbol: 'Phone: +38(050)939-74-50  Email: gmakan55@gmail.com  Skype: g_makeev'},
  {position: 4, name: 'Skills', symbol: 'HTML5, CSS3, JavaScript, SQL.  Experience of work as a Technical Support Engineer'},
  {position: 5, name: 'Experience / IT related educational practice', symbol: '<app-employment></app-employment>'},
  {position: 4, name: 'Lithium', symbol: 'Li'},
  {position: 4, name: 'Lithium', symbol: 'Li'},
  
];


@Component({
  selector: 'app-cv-table',
  templateUrl: './cv-table.component.html',
  styleUrls: ['./cv-table.component.scss']
})
export class CvTableComponent implements OnInit {

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['name', 'symbol'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

}
