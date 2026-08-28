import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookingdetails } from './bookingdetails';

describe('Bookingdetails', () => {
  let component: Bookingdetails;
  let fixture: ComponentFixture<Bookingdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bookingdetails],
    }).compileComponents();

    fixture = TestBed.createComponent(Bookingdetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
