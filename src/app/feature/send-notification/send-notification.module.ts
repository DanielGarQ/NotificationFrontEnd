import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendNotificationComponent } from './components/send-notification/send-notification.component';
import { SendNotificationRoutingModule } from './send-notification-routing.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    SendNotificationComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SendNotificationRoutingModule,
  ],
  providers: [],
  bootstrap: [SendNotificationComponent]
})
export class SendNotificationModule { }
