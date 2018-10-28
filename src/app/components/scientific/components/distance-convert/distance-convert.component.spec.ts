import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceConvertComponent } from './distance-convert.component';

describe('DistanceConvertComponent', () => {
  let component: DistanceConvertComponent;
  let fixture: ComponentFixture<DistanceConvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistanceConvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
