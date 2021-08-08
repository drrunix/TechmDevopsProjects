import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UwpHomeComponent } from './uwp-home.component';

describe('UwpHomeComponent', () => {
  let component: UwpHomeComponent;
  let fixture: ComponentFixture<UwpHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UwpHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UwpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
