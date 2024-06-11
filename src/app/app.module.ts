import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './feature/home/home.component';
import { LoginComponent } from './feature/login/login.component';
import { RegisterComponent } from './feature/register/register.component';
import { SendNotificationModule } from './feature/send-notification/send-notification.module';
import { InboxModule } from './feature/inbox/inbox.module';
import { HeaderHomeComponent } from './shared/components/headers/header-home/header-home.component';
import { SendNotificationRoutingModule } from './feature/send-notification/send-notification-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    SendNotificationModule,
    InboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
