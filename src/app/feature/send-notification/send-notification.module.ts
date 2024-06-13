import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendNotificationComponent } from './components/send-notification/send-notification.component';
import { SendNotificationRoutingModule } from './send-notification-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SendNotificationComponent,
  ],
  imports: [
    CommonModule,
    SendNotificationRoutingModule, SharedModule
  ]
})
export class SendNotificationModule { }
