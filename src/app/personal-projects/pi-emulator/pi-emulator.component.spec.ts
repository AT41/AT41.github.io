import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiEmulatorComponent } from './pi-emulator.component';

describe('PiEmulatorComponent', () => {
  let component: PiEmulatorComponent;
  let fixture: ComponentFixture<PiEmulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiEmulatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiEmulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
