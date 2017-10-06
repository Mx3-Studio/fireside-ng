import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
      auth: false
    },
    {
      route: '/login',
      title: 'Login',
      active: 'login',
      order: 3,
      auth: false
    }],
  };

  closeNav = function() {
    this.nav.mobileIsOpen = false;
  };

  today = new Date();

  toggleMenu = function(isOpen) {
    this.nav.mobileIsOpen = isOpen ? false : true;
  };

  logout = function() {}

}
