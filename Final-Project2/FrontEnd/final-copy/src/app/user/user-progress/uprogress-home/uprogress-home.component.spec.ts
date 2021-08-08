import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UprogressHomeComponent } from './uprogress-home.component';

describe('UprogressHomeComponent', () => {
  let component: UprogressHomeComponent;
  let fixture: ComponentFixture<UprogressHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UprogressHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UprogressHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
