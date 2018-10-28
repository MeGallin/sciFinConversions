import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureValueHomeComponent } from './future-value-home.component';

describe('FutureValueHomeComponent', () => {
  let component: FutureValueHomeComponent;
  let fixture: ComponentFixture<FutureValueHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureValueHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureValueHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
