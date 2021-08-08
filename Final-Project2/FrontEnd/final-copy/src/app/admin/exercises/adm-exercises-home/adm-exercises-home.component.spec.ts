import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmExercisesHomeComponent } from './adm-exercises-home.component';

describe('AdmExercisesHomeComponent', () => {
  let component: AdmExercisesHomeComponent;
  let fixture: ComponentFixture<AdmExercisesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmExercisesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmExercisesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
