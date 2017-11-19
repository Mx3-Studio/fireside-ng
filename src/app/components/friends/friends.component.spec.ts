import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Mock } from 'ts-mocks';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { FriendsService } from '../../services/friends.service';
import { AuthenticationService } from '../../services/authentication.service';

import { FriendsComponent } from './friends.component';

describe('FriendsComponent', () => {
  let component: FriendsComponent;
  let fixture: ComponentFixture<FriendsComponent>;

  let mockFriendsSvc: Mock<FriendsService>;
  let mockAuthService: Mock<AuthenticationService>;
  const user: firebase.UserInfo = {
    displayName: "Test User",
    email: "user@testers.com",
    phoneNumber: "123-456-7890",
    photoURL: null,
    providerId: "google",
    uid: "123456789123456789"
  }
  const list: any[] = [

  ]

  beforeEach(async(() => {
    mockFriendsSvc = new Mock<FriendsService>();
    mockFriendsSvc.setup(o => o.list).is((s: String) => Observable.of(list));
    mockAuthService = new Mock<AuthenticationService>();
    mockAuthService.setup(o => o.userInfo).is(Observable.of(user));

    TestBed.configureTestingModule({
      declarations: [ FriendsComponent ],
      providers: [
        { provide: AuthenticationService, useValue: mockAuthService.Object },
        { provide: FriendsService, useValue: mockFriendsSvc.Object },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
