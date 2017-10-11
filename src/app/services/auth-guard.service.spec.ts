import { TestBed, inject } from '@angular/core/testing';
import { mock, instance, when } from 'ts-mockito';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {
  const authenticationService:AuthenticationService = mock(AuthenticationService);
  const user:firebase.UserInfo = {
    displayName : "Test User",
    email : "user@testers.com",
    phoneNumber : "123-456-7890",
    photoURL : null,
    providerId : "google",
    uid : "123456789123456789"
  }

  beforeEach(() => {
    when(authenticationService.userInfo).thenReturn(Observable.of(user));

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AuthGuardService,
        { provide: AuthenticationService, useValue: instance(authenticationService) }
      ]
    }).compileComponents();
  });

  it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));

  // it('should return canActivate true for valid user', inject([AuthGuardService], (service: AuthGuardService) => {
  //   expect(service.canActivate()).toBe(Observable.of(true));
  // }));

  // it('should return canActivate false for no user', inject([AuthGuardService], (service: AuthGuardService) => {
  //   authenticationService.userInfo = Observable.of(null).delay(500);
  //   expect(service.canActivate).toBeTruthy();
  // }));

});
