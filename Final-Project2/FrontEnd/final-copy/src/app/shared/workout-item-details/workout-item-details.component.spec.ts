import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutItemDetailsComponent } from './workout-item-details.component';

describe('WorkoutItemDetailsComponent', () => {
  let component: WorkoutItemDetailsComponent;
  let fixture: ComponentFixture<WorkoutItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
