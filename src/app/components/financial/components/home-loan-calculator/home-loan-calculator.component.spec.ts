import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoanCalculatorComponent } from './home-loan-calculator.component';

describe('HomeLoanCalculatorComponent', () => {
  let component: HomeLoanCalculatorComponent;
  let fixture: ComponentFixture<HomeLoanCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLoanCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLoanCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
