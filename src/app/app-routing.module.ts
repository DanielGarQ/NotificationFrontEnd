import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { SendNotificationComponent } from './components/notification/send-notification/send-notification.component';
// import { HomeComponent } from './feature/home/home.component';

export const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'inbox', loadChildren: () => import('./feature/inbox/inbox.module').then(module => module.InboxModule)/*, canActivate: [SecurityGuard]*/},
  {path:'send-notification', component: SendNotificationComponent},
  {path:'**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
