import { TestBed, inject } from '@angular/core/testing';

// Import environment configuration
import { environment } from '../../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationService,
        AngularFireAuth
      ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase)
      ]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
