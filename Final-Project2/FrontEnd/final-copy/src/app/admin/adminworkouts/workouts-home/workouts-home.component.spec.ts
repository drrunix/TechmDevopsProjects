import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutsHomeComponent } from './workouts-home.component';

describe('WorkoutsHomeComponent', () => {
  let component: WorkoutsHomeComponent;
  let fixture: ComponentFixture<WorkoutsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
