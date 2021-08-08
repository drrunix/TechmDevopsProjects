import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmusersHomeComponent } from './admusers-home.component';

describe('AdmusersHomeComponent', () => {
  let component: AdmusersHomeComponent;
  let fixture: ComponentFixture<AdmusersHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmusersHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmusersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
