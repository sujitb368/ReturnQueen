import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetunMobileViewComponent } from './retun-mobile-view.component';

describe('RetunMobileViewComponent', () => {
  let component: RetunMobileViewComponent;
  let fixture: ComponentFixture<RetunMobileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetunMobileViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetunMobileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
