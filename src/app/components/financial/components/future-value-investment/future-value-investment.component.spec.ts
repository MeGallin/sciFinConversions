import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureValueInvestmentComponent } from './future-value-investment.component';

describe('FutureValueInvestmentComponent', () => {
  let component: FutureValueInvestmentComponent;
  let fixture: ComponentFixture<FutureValueInvestmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureValueInvestmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureValueInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
