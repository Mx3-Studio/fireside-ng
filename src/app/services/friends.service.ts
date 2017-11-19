import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProfileService } from './profile.service';

@Injectable()
export class FriendsService {

  constructor(private db: AngularFireDatabase, private profileSvc: ProfileService) { }

  list(uid: String): Observable<any[]> {
    let friendsList = this.db.list(`users/${uid}/chats`)
    friendsList.subscribe(() => {
      friendsList.forEach(function (friend: any) {
        //friend.profile = this.profileSvc.getById(friend.$id);
      })
    });
    return friendsList;
  }

  search(email: String): Observable<any[]> {
    return this.db.list('profiles', {
      query: {
        orderByChild: 'email',
        equalTo: email
      }
    });
  }

}
