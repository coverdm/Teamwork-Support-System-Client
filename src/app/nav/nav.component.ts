import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '@services/notifications.service';
import { Notification } from '@models/notification.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [NotificationsService ]
})
export class NavComponent implements OnInit {

  notifications: Notification[];

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit() {
    this.notifications = this.notificationsService.notifications;
  }

  clear() {
    this.notifications = [];
  }

}
