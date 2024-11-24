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
import { RegisterComponent } from './feature/register/register.component';
import { SendNotificationModule } from './feature/send-notification/send-notification.module';
import { InboxModule } from './feature/inbox/inbox.module';
import { AuthService } from './service/auth.service';
import { PersonaService } from './service/persona.service';
import { HeaderV2Component } from './components/header-v2/header-v2.component';
import { FooterV2Component } from './components/footer-v2/footer-v2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderV2Component,
    FooterV2Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    SendNotificationModule,
    InboxModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatButtonModule
  ],
  providers: [AuthService, PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
