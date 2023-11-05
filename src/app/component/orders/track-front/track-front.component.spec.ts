import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackFrontComponent } from './track-front.component';

describe('TrackFrontComponent', () => {
  let component: TrackFrontComponent;
  let fixture: ComponentFixture<TrackFrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackFrontComponent]
    });
    fixture = TestBed.createComponent(TrackFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
