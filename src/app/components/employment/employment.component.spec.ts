import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmploymentComponent } from './employment.component';
import { EmploymentDetailComponent } from '../employment-detail/employment-detail.component';
import { Employment } from '../../interfaces/employment';

describe('EmploymentComponent', () => {
  let component: EmploymentComponent;
  let fixture: ComponentFixture<EmploymentComponent>;

  let selectedEmployment: Employment;
  let employment: Employment;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        EmploymentComponent, 
        EmploymentDetailComponent 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSelect', () => {
    expect(selectedEmployment).toEqual(employment);
  });

  it('onSelect() method', () => {
    expect(component.onSelect(employment)).toBeDefined();    
  });
  
});
