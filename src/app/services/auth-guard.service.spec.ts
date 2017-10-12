import { TestBed, inject, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Mock } from 'ts-mocks';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Location } from "@angular/common";
import { Router, Routes } from '@angular/router';
import { AuthenticationService } from './authentication.service';

import { AuthGuardService } from './auth-guard.service';

@Component({ template: `<router-outlet></router-outlet>` })
class AppComponent { }

@Component({ template: `<h1>Home</h1>` })
class HomeComponent { }

@Component({ template: `<h1>Login</h1>` })
class LoginComponent { }

describe('AuthGuardService', () => {

  describe('works with a valid user', () => {
    let mockAuthService: Mock<AuthenticationService>;
    let authService: AuthenticationService;
    const user: firebase.UserInfo = {
      displayName: "Test User",
      email: "user@testers.com",
      phoneNumber: "123-456-7890",
      photoURL: null,
      providerId: "google",
      uid: "123456789123456789"
    }

    beforeEach(() => {
      mockAuthService = new Mock<AuthenticationService>();
      mockAuthService.setup(o => o.userInfo).is(Observable.of(user));
      authService = mockAuthService.Object;

      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        providers: [
          { provide: AuthenticationService, useValue: authService },
          AuthGuardService
        ]
      }).compileComponents();
    });

    it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
      expect(service).toBeTruthy();
    }));

    it('should return canActivate true for valid user', inject([AuthGuardService], (service: AuthGuardService) => {
      service.canActivate().subscribe(result => expect(result).toBe(true));
    }));

  });

  describe('behaves as expected with no authentication', () => {
  
    const routes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent }
    ];

    let mockAuthService: Mock<AuthenticationService>;
    let authService: AuthenticationService;

    let location: Location;
    let router: Router;
    let fixture;

    beforeEach( async(() => {
      mockAuthService = new Mock<AuthenticationService>();
      mockAuthService.setup(o => o.userInfo).is(Observable.of(null));
      authService = mockAuthService.Object;

      TestBed.configureTestingModule({
        declarations: [ AppComponent, HomeComponent, LoginComponent ],
        imports: [
          RouterTestingModule.withRoutes(routes)
        ],
        providers: [
          { provide: AuthenticationService, useValue: authService },
          AuthGuardService
        ]
      }); //.compileComponents();

      router = TestBed.get(Router);
      location = TestBed.get(Location);
      fixture = TestBed.createComponent(AppComponent);
      router.initialNavigation();
    }));

    it('should return canActivate false', inject([AuthGuardService], (service: AuthGuardService) => {
      service.canActivate().subscribe(result => expect(result).toBe(false));
    }));

    // This doesn't correctly pick up the route change for some reason
    // See: https://codecraft.tv/courses/angular/unit-testing/routing/
    // More testing examples here - https://embed.plnkr.co/?show=preview
    it('should navigate to /login', fakeAsync(inject([AuthGuardService], (service: AuthGuardService) => {
      //router.navigate(['login']);
      service.canActivate(); //.subscribe(result => {
      //   expect(result).toBe(false)
      //   expect(location.path()).toBe('/login');
      // })
      // Perhaps should use the following syntax?
      tick(50);
      expect(location.path()).toBe('/login');
    })));

    // This also doesn't work and is exactly copied from the above demo
    it('navigate to "" redirects you to /home', fakeAsync(() => {
      router.navigate(['']);
      tick(50);
      expect(location.path()).toBe('/home');
    }));

    // This also doesn't work and is exactly copied from the above demo
    it('navigate to "search" takes you to /search', fakeAsync(() => {
      router.navigate(['/home']);
      tick(50);
      expect(location.path()).toBe('/home');
    }));

    // This works from the example
    it('fakeAsync works', fakeAsync(() => {
      let promise = new Promise((resolve) => {
        setTimeout(resolve, 10)
      });
      let done = false;
      promise.then(() => done = true);
      tick(50);
      expect(done).toBeTruthy();
    }));

  });

});
