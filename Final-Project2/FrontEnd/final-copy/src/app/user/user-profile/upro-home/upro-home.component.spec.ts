import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UproHomeComponent } from './upro-home.component';

describe('UproHomeComponent', () => {
  let component: UproHomeComponent;
  let fixture: ComponentFixture<UproHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UproHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UproHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
