import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XFaceDetectorComponent } from './x-face-detector.component';

describe('XFaceDetectorComponent', () => {
  let component: XFaceDetectorComponent;
  let fixture: ComponentFixture<XFaceDetectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XFaceDetectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XFaceDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
