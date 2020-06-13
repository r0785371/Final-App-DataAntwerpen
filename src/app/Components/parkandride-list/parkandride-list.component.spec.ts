import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkandrideListComponent } from './parkandride-list.component';

describe('ParkandrideListComponent', () => {
  let component: ParkandrideListComponent;
  let fixture: ComponentFixture<ParkandrideListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkandrideListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkandrideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
