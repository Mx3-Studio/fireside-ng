import { TestBed, inject } from '@angular/core/testing';
import { mock, instance, when } from 'ts-mockito';

import { AngularFireAuth } from 'angularfire2/auth';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  const angularFireAuth:AngularFireAuth = mock(AngularFireAuth);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationService,
        { provide: AngularFireAuth, useValue: instance(angularFireAuth) }
      ]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
