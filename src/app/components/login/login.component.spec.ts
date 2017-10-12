import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Mock } from 'ts-mocks';

import { AuthenticationService } from '../../services/authentication.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let mockAuthService: Mock<AuthenticationService>;
  let authService: AuthenticationService;

  beforeEach(async(() => {
    mockAuthService = new Mock<AuthenticationService>();
    mockAuthService.setup(o => o.login);
    mockAuthService.setup(o => o.logout);
    authService = mockAuthService.Object;

    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [ { provide: AuthenticationService, useValue: authService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can login', () => {
    component.login();
    expect(authService.login).toHaveBeenCalled();
  });

  it('can logout', () => {
    component.logout();
    expect(authService.logout).toHaveBeenCalled();
  });

});
