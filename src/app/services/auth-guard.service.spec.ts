import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Mock } from 'ts-mocks';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {

  describe('canActivate a valid user', () => {
    let mockAuthService: Mock<AuthenticationService>;
    const user: firebase.UserInfo = {
      displayName: "Test User",
      email: "user@testers.com",
      phoneNumber: "123-456-7890",
      photoURL: null,
      providerId: "google",
      uid: "123456789123456789"
    }

    beforeEach(() => {
      mockAuthService = new Mock<AuthenticationService>();
      mockAuthService.setup(o => o.userInfo).is(Observable.of(user));

      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        providers: [
          { provide: AuthenticationService, useValue: mockAuthService.Object },
          AuthGuardService
        ]
      }).compileComponents();
    });

    it('returns true', inject([AuthGuardService], (service: AuthGuardService) => {
      service.canActivate().subscribe(result => expect(result).toBe(true));
    }));

  });

  describe('canActivate with no authentication', () => {
    let mockAuthService: Mock<AuthenticationService>;
    let authService: AuthenticationService;

    beforeEach(() => {
      mockAuthService = new Mock<AuthenticationService>();
      mockAuthService.setup(o => o.userInfo).is(Observable.of(null));
      authService = mockAuthService.Object;

      TestBed.configureTestingModule({
        imports: [ RouterTestingModule ],
        providers: [
          { provide: AuthenticationService, useValue: authService },
          AuthGuardService
        ]
      });
    });

    // Found this solution here - https://stackoverflow.com/questions/41496194/unit-testing-angular-2-authguard-spy-method-is-not-being-called
    it('returns false and navigates to /login', inject([AuthGuardService, Router], (service: AuthGuardService, router: Router) => {
      // add a route spy
      spyOn(router, 'navigate');

      service.canActivate().subscribe(result => {
        expect(result).toBe(false);
        expect(router.navigate).toHaveBeenCalledWith([ 'login' ]);
      });
    }));

  });

});
