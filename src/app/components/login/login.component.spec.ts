import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Mock } from 'ts-mocks';

import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import * as firebase from 'firebase/app';

import { LoginComponent } from './login.component';
import { Observable } from 'rxjs/Observable';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let mockPromise: Mock<firebase.Promise<any>>;
  let mockUrlSegment: Mock<UrlSegment>;
  let mockAuthService: Mock<AuthenticationService>;
  let mockActivatedRoute: Mock<ActivatedRoute>;
  let mockRouter: Mock<Router>;
  let authService: AuthenticationService;

  beforeEach(async(() => {
    mockPromise = new Mock<firebase.Promise<any>>();
    mockPromise.setup(o => o.then);
    mockUrlSegment = new Mock<UrlSegment>();
    mockAuthService = new Mock<AuthenticationService>();
    mockAuthService.setup(o => o.login).is(() => mockPromise.Object);
    mockAuthService.setup(o => o.logout);
    mockActivatedRoute = new Mock<ActivatedRoute>();
    mockActivatedRoute.setup(o => o.url).is(Observable.of([mockUrlSegment.Object]))
    mockRouter = new Mock<Router>();
    authService = mockAuthService.Object;

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute.Object },
        { provide: Router, useValue: mockRouter.Object },
        { provide: AuthenticationService, useValue: authService },
      ]
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

});
