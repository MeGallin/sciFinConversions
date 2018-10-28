import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorsePowerComponent } from './horse-power.component';

describe('HorsePowerComponent', () => {
  let component: HorsePowerComponent;
  let fixture: ComponentFixture<HorsePowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorsePowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorsePowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
