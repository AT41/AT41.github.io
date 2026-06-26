import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatRequirementChecklistComponent } from './stat-requirement-checklist.component';

describe('StatRequirementChecklistComponent', () => {
  let component: StatRequirementChecklistComponent;
  let fixture: ComponentFixture<StatRequirementChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatRequirementChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatRequirementChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
