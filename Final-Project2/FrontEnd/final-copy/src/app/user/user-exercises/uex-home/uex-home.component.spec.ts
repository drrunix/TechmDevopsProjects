import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UexHomeComponent } from './uex-home.component';

describe('UexHomeComponent', () => {
  let component: UexHomeComponent;
  let fixture: ComponentFixture<UexHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UexHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UexHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
