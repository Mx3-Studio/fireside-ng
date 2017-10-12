import { TestBed, inject } from '@angular/core/testing';
import { Mock } from 'ts-mocks';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let mockNgFireAuth: Mock<AngularFireAuth>;
  let ngFireAuth: AngularFireAuth;
  let mockAuth: Mock<firebase.auth.Auth>;

  beforeEach(() => {
    mockAuth = new Mock<firebase.auth.Auth>();
    mockAuth.setup(o => o.signInWithPopup).is(provider => firebase.Promise.resolve(null));
    mockAuth.setup(o => o.signOut).is(() => firebase.Promise.resolve(null));
    mockNgFireAuth = new Mock<AngularFireAuth>();
    mockNgFireAuth.setup(o => o.auth).is(mockAuth.Object);
    ngFireAuth = mockNgFireAuth.Object;

    TestBed.configureTestingModule({
      providers: [
        AuthenticationService,
        { provide: AngularFireAuth, useValue: ngFireAuth }
      ]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  it('can login', inject([AuthenticationService], (service: AuthenticationService) => {
    service.login();
    expect(ngFireAuth.auth.signInWithPopup).toHaveBeenCalled();
  }));

  it('can logout', inject([AuthenticationService], (service: AuthenticationService) => {
    service.logout();
    expect(ngFireAuth.auth.signOut).toHaveBeenCalled();
  }));

});
