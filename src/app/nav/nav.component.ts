import {Profile} from '../profile/model/profile.model';
import { Component, OnInit } from "@angular/core";
import { NotificationsService } from "@services/notifications.service";
import { Router } from "@angular/router";
import { ProfileService } from "../profile/service/profile.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
  providers: [NotificationsService, ProfileService]
})
export class NavComponent implements OnInit {
  notifications: Notification[];
  profile: Profile;

  constructor(
    private notificationsService: NotificationsService,
    private router: Router,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.notifications = this.notificationsService.notifications;
    this.profileService
      .getCurrentLoggedUserProfile()
      .subscribe(
        res => (this.profile = res),
        error => this.router.navigate(["create-profile"])
      );
  }

  clear() {
    this.notifications = [];
  }
}
