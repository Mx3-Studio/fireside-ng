import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  public chats: Observable<any[]>;
  public currentUser = {};

  constructor(db: AngularFireDatabase) {
    this.chats = db.list('chats');
  }

  ngOnInit() {
  }

}
