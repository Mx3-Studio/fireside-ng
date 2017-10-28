import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Services
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';

// Routing
import { AppRouting } from './app-routing.module';

// Import environment configuration
import { environment } from '../environments/environment';
// Import AngularFire
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginComponent } from './components/login/login.component';
import { FriendsComponent } from './components/friends/friends.component';
import { CheckComponent } from './components/check/check.component';
import { ChatsComponent } from './components/chats/chats.component';
import { ProfileService } from './services/profile.service';
import { FriendsService } from './services/friends.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FriendsComponent,
    CheckComponent,
    ChatsComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,

    // Init Firebase with environment configuration
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    ProfileService,
    FriendsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
