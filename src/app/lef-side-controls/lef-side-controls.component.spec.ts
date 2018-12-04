import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LefSideControlsComponent } from './lef-side-controls.component';

describe('LefSideControlsComponent', () => {
  let component: LefSideControlsComponent;
  let fixture: ComponentFixture<LefSideControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LefSideControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LefSideControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
