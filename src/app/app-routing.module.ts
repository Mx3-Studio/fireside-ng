import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './components/login/login.component';
import { FriendsComponent } from './components/friends/friends.component';
import { CheckComponent } from './components/check/check.component';
import { ChatsComponent } from './components/chats/chats.component';

// Services
import { AuthGuardService } from './services/auth-guard.service';

// Routes
const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/' },
    { path: 'friends', component: FriendsComponent, canActivate: [AuthGuardService] },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LoginComponent },
    { path: 'check', component: CheckComponent },
    { path: '', component: ChatsComponent },    
];

export const AppRouting = RouterModule.forRoot(routes);
