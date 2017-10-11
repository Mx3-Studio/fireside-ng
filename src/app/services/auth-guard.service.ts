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
    console.log('auth', this.auth);
    console.log('userInfo', this.auth.userInfo);
   return this.auth.userInfo
     .first()
     .map(user => !!user)
     .do(user => !user ? this.router.navigate(['/login']) : true);
  }

}
