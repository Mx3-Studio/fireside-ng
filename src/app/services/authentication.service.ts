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
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((user) => { console.log(user); });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => { console.log('logged out') });
  }

}
