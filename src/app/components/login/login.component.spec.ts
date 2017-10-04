import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Import environment configuration
import { environment } from '../../../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginComponent } from './login.component';
import { AuthenticationService } from '../../services/authentication.service';
import * as firebase from 'firebase/app';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [ AuthenticationService, AngularFireAuth ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase)
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
});
