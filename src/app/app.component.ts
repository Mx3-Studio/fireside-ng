import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Fireside";
  today = new Date();

  constructor(private router: Router, private auth: AuthenticationService) {
  }

  nav = {
    mobileIsOpen: false,
    links: [{
      route: '/',
      title: 'Chat',
      active: 'chat',
      order: 1,
      auth: 'public'
    },
    {
      route: '/friends',
      title: 'Friends',
      active: 'friends',
      order: 2,
      auth: true
    },
    {
      route: '/login',
      title: 'Login',
      active: 'login',
      order: 3,
      auth: false
    },
    {
      route: '/logout',
      title: 'Logout',
      active: 'logout',
      order: 3,
      auth: true
    }],
  };

  get user(): Observable<firebase.UserInfo> {
    return this.auth.userInfo;
  }

  closeNav = function () {
    this.nav.mobileIsOpen = false;
  }

  toggleMenu = function (isOpen) {
    this.nav.mobileIsOpen = isOpen ? false : true;
  }

}
