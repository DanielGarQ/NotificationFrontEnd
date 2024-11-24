import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './feature/register/register.component';
import { HomeComponent } from './components/home/home.component';
// import { HomeComponent } from './feature/home/home.component';

export const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'inbox', loadChildren: () => import('./feature/inbox/inbox.module').then(module => module.InboxModule)/*, canActivate: [SecurityGuard]*/},
  {path:'send-notification', loadChildren: () => import('./feature/send-notification/send-notification.module').then(module => module.SendNotificationModule)/*, canActivate: [SecurityGuard]*/},
  {path:'**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
