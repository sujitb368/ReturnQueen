import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnDeskViewComponent } from './return-desk-view.component';

describe('DeskMobileViewComponent', () => {
  let component: ReturnDeskViewComponent;
  let fixture: ComponentFixture<ReturnDeskViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnDeskViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnDeskViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
