import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './components/login/login.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { CheckComponent } from './components/check/check.component';
import { ChatsComponent } from './components/chats/chats.component';

// Services
import { AuthGuardService } from './services/auth-guard.service';

// Routes
const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/' },
    { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuardService] },
    { path: '', component: LoginComponent },
    { path: 'check', component: CheckComponent },
    { path: 'chats', component: ChatsComponent },    
];

export const AppRouting = RouterModule.forRoot(appRoutes);
