import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Mock } from 'ts-mocks';

import { AuthenticationService } from './services/authentication.service';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let mockAuthService: Mock<AuthenticationService>;

  beforeEach(async(() => {
    mockAuthService = new Mock<AuthenticationService>();

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AuthenticationService, useValue: mockAuthService.Object },
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Fireside'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Fireside');
  }));
  it(`should render title in a div tag with class 'header'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.header').textContent).toContain('Fireside');
  }));
});
