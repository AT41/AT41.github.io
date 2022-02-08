import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalPhotoframeComponent } from './digital-photoframe.component';

describe('DigitalPhotoframeComponent', () => {
  let component: DigitalPhotoframeComponent;
  let fixture: ComponentFixture<DigitalPhotoframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalPhotoframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalPhotoframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
