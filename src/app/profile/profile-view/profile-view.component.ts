import { Profile } from "../model/profile.model";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ProfileService } from "../service/profile.service";
import { OnChanges } from "@angular/core/src/metadata/lifecycle_hooks";
@Component({
  selector: "app-profile-view",
  templateUrl: "./profile-view.component.html",
  styleUrls: ["./profile-view.component.scss"],
  providers: [ProfileService]
})
export class ProfileViewComponent implements OnInit, OnChanges {
  
  @Input() userId: string;
  @Input() readOnly: boolean;
  @Output() isFound: EventEmitter<boolean> = new EventEmitter<boolean>();

  profile: Profile;

  failed_message: string = "Profile not found";
  isFailed: boolean = false;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {}

  ngOnChanges() {
    this.profileService.getProfile(this.userId).subscribe(response => {
      this.profile = response;
      this.isFailed = false;
      this.isFound.emit(true);
    }, error => {
      this.profile = null;
      this.isFailed = true;
      this.isFound.emit(false);
    });
  }
}
