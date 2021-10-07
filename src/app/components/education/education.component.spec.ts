import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationComponent } from './education.component';
import { EducationDetailComponent } from '../education-detail/education-detail.component';
import { Education } from '../../interfaces/education';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;
  
  let selectedEducation: Education;
  let education: Education;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        EducationComponent, 
        EducationDetailComponent 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSelect', () => {
    expect(selectedEducation).toEqual(education);
  });
  
  it('onSelect() method', () => {
    expect(component.onSelect(education)).toBeDefined();    
  });

});
