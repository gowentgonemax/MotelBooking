import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotelroombookingComponent } from './motelroombooking.component';

describe('MotelroombookingComponent', () => {
  let component: MotelroombookingComponent;
  let fixture: ComponentFixture<MotelroombookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotelroombookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotelroombookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
