import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularImageHolderComponent } from './circular-image-holder.component';

describe('CircularImageHolderComponent', () => {
  let component: CircularImageHolderComponent;
  let fixture: ComponentFixture<CircularImageHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircularImageHolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularImageHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
