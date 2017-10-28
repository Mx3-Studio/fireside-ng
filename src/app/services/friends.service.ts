import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProfileService } from './profile.service';

@Injectable()
export class FriendsService {

  constructor(private db: AngularFireDatabase, private profileSvc: ProfileService) { }

  list(uid: String) {
    let friendsList = this.db.list(`users/${uid}/chats`)
    friendsList.subscribe(() => {
      friendsList.forEach(function (friend: any) {
        //friend.profile = this.profileSvc.getById(friend.$id);
      })
    });
    return friendsList;
  }

  search(email: String) {
    return this.db.list('profiles', {
      query: {
        orderByChild: 'email',
        equalTo: email
      }
    });
  }

}
