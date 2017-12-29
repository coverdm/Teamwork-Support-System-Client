import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '@services/notifications.service';
import { Notification } from '@models/notification.model';
import { Router } from '@angular/router';
import { ProfileService } from '@services/profile.service';
import { Profile } from '@models/profile.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [NotificationsService, ProfileService]
})
export class NavComponent implements OnInit {

  notifications: Notification[];
  profile: Profile;

  constructor(private notificationsService: NotificationsService, private router: Router, private profileService: ProfileService) { }

  ngOnInit() {
    this.notifications = this.notificationsService.notifications;
    this.profileService.getProfile().subscribe(res => this.profile = res, error => this.router.navigate(['create-profile']));
  }

  clear() {
    this.notifications = [];
  }
}
