import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error;

  constructor(private activeRoute: ActivatedRoute, private router: Router, private auth: AuthenticationService) {
    activeRoute.url.subscribe((url) => {
      if (url[0].path === 'logout') {
        this.auth.logout().then(() => { this.router.navigate(['login']); });
      }
    })
  }

  login() {
    this.auth.login()
      .then(
        (user) => { this.router.navigate(['']) },
        (reason) => { this.error = reason; }
      );
  }

}
