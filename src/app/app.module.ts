import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { InboxModule } from './feature/inbox/inbox.module';
import { AuthService } from './service/auth.service';
import { PersonaService } from './service/persona.service';
import { HeaderV2Component } from './components/header-v2/header-v2.component';
import { FooterV2Component } from './components/footer-v2/footer-v2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NotificationDetailsComponent } from './components/notification/notification-details/notification-details.component';
import { NotificationsListComponent } from './components/notification/notifications-list/notifications-list.component';
import { SendNotificationComponent } from './components/notification/send-notification/send-notification.component';
import { UsersListComponent } from './components/notification/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderV2Component,
    FooterV2Component,
    NotificationDetailsComponent,
    SendNotificationComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    InboxModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService, PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
