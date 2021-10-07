import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { EducationService } from './education.service';
import { EDUCATIONS } from '../data/mock-education';


describe('EducationService', () => {
  let service: EducationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EducationService,
        HttpClient,
        HttpHandler
      ]
    });
    service = TestBed.inject(EducationService);
  });

  /* beforeEach( () => {
    let service = new EducationService();
  }); */
  
  it('has been creates', () => {
    expect(service).toBeTruthy();
  });

  /* it('getEducations() should return edu', () => {
    expect(service.getEducations()).toEqual(EDUCATIONS);
  }); */

  it('getEducations() should return some educations', () => {
    expect(service.getEducations()).toBeDefined();
  });

  it('getEducations:Observable<Education[]> should return value from observable',
    (done: DoneFn) => {
    service.getEducations().subscribe(value => {
      console.log(value);
      expect(value).toBe(EDUCATIONS);
      done();
    });
  });

});


  
