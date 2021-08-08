import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminspageComponent } from './adminspage.component';

describe('AdminspageComponent', () => {
  let component: AdminspageComponent;
  let fixture: ComponentFixture<AdminspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
