import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedConvertComponent } from './speed-convert.component';

describe('SpeedConvertComponent', () => {
  let component: SpeedConvertComponent;
  let fixture: ComponentFixture<SpeedConvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedConvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
