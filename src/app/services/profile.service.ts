import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProfileService {

  constructor(private db: AngularFireDatabase) { }

  getById(uid: String) {
    return this.db.object(`users/${uid}/profile`);
  }

  store(userProfile: any) {
    var updates = {};
    // TODO - Update the global profile with the new profile data (under /profiles) [AUTH-5]
    updates['/profiles'] = userProfile;
    updates['/users/' + userProfile.uid + '/profile'] = userProfile;
    // TODO - Update the user profile with the new profile data (under /users/{userId}/profile) [AUTH-5]
    this.db.object('profiles').update(updates);
  }

}
