import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnFooterComponent } from './return-footer.component';

describe('ReturnFooterComponent', () => {
  let component: ReturnFooterComponent;
  let fixture: ComponentFixture<ReturnFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
