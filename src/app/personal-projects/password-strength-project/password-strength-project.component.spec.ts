import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrengthProjectComponent } from './password-strength-project.component';

describe('PasswordStrengthProjectComponent', () => {
  let component: PasswordStrengthProjectComponent;
  let fixture: ComponentFixture<PasswordStrengthProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordStrengthProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordStrengthProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
