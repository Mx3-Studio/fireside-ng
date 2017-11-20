import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {
  public chats: Observable<any[]>;

  constructor(private db: AngularFireDatabase, private auth: AuthenticationService) {
    this.chats = db.list('chats');
  }

  get currentUser(): Observable<firebase.UserInfo> {
    return this.auth.userInfo;
  }

}
