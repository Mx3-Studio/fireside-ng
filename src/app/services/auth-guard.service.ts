import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/do';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthenticationService) { }

  canActivate(): Observable<boolean> {
    return this.auth.userInfo
      .first()
      .map(user => !!user)
      .do(authenticated => {
        if (!authenticated) {
          console.log('BLOCKED URL', this.router.url);
          this.router.navigate(['/login']);
        }
      });
  }

}
