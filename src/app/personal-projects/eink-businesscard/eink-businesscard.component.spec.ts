import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinkBusinesscardComponent } from './eink-businesscard.component';

describe('EinkBusinesscardComponent', () => {
  let component: EinkBusinesscardComponent;
  let fixture: ComponentFixture<EinkBusinesscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinkBusinesscardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EinkBusinesscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
