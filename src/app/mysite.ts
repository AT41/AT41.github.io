import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MySiteComponent } from './mysite.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MySiteComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MySiteComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'MySite'`, () => {
    const fixture = TestBed.createComponent(MySiteComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('MySite');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MySiteComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('MySite app is running!');
  });
});
