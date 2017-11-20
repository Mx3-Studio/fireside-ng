import { Injectable } from '@angular/core';

// Import Observable
import { Observable } from 'rxjs';

// Import Firebase and AngularFire
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
  private _userInfo: Observable<firebase.UserInfo>;

  constructor(private afAuth: AngularFireAuth) {
    this._userInfo = this.afAuth.authState;
  }

  get userInfo(): Observable<firebase.UserInfo> {
    return this._userInfo;
  }

  login() {
    return this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

}
