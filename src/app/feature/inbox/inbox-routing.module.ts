import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InboxComponent } from "./components/inbox/inbox.component";
import { NotificationsListComponent } from "./components/notifications-list/notifications-list.component";
import { TopButtonsComponent } from "./components/top-buttons/top-buttons.component";
import { NotificationContentComponent } from "./components/notification-content/notification-content.component";

const routes: Routes = [
  { path: "", component:InboxComponent, children: [
    {path: "", component: NotificationsListComponent},
    {path: "", component: TopButtonsComponent},
    {path: "", component: NotificationContentComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InboxRoutingModule { }

