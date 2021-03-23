import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapaneseWebsiteComponent } from './japanese-website.component';

describe('JapaneseWebsiteComponent', () => {
  let component: JapaneseWebsiteComponent;
  let fixture: ComponentFixture<JapaneseWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JapaneseWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JapaneseWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
