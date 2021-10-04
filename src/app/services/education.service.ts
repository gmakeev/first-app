import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Education } from '../interfaces/education';
import { EDUCATIONS } from '../data/mock-education';


@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(
    private http: HttpClient,
  ) { }

  /* getEducations(): Education[] {
    return EDUCATIONS;
  } */

  /* getEducations(): Observable<Education[]> {
    return of(EDUCATIONS);
  } */

  getEducations(): Observable<Education[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('EducationService: fetched educations');
    return of(EDUCATIONS);
  }



  /* getEducations(): Observable<Education[]> {
    return of(EDUCATIONS);
  } */

  


}
