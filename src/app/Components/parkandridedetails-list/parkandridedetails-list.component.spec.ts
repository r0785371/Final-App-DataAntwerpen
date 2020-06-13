import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkandridedetailsListComponent } from './parkandridedetails-list.component';

describe('ParkandridedetailsListComponent', () => {
  let component: ParkandridedetailsListComponent;
  let fixture: ComponentFixture<ParkandridedetailsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkandridedetailsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkandridedetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
