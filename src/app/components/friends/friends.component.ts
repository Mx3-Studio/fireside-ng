import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import { FriendsService } from '../../services/friends.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  public searchResults: Observable<any[]>;
  public searched: boolean = false;
  public friends: AsyncSubject<any[]> = new AsyncSubject();

  constructor(private friendSvc: FriendsService, private auth: AuthenticationService) {
  }

  ngOnInit() {
    this.auth.userInfo.subscribe(user => {
      this.friendSvc.list(user.uid).subscribe(item => {
        this.friends.next(item);
      });
    })
  }

  searchUsers(email: String) {
    this.searched = true;
    this.searchResults = this.friendSvc.search(email);
  }

}
