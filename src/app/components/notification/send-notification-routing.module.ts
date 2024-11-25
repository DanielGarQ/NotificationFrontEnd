import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { NotificationDetailsComponent } from './notification-details/notification-details.component';
import { UsersListComponent } from 'src/app/components/notification/users-list/users-list.component';

const routes: Routes = [
  { path: "", component: SendNotificationComponent, children:[
    {path: "", component: UsersListComponent},
    {path: "", component: NotificationDetailsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SendNotificationRoutingModule { }
