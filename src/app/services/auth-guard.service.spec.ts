import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Import environment configuration
import { environment } from '../../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';
import * as firebase from 'firebase/app';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        RouterTestingModule
      ],
      providers: [
        AuthGuardService,
        AuthenticationService,
        AngularFireAuth
      ]
    }).compileComponents();
  });

  it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
