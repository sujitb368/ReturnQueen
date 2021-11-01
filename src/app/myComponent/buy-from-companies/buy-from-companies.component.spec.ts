import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyFromCompaniesComponent } from './buy-from-companies.component';

describe('BuyFromCompaniesComponent', () => {
  let component: BuyFromCompaniesComponent;
  let fixture: ComponentFixture<BuyFromCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyFromCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyFromCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
