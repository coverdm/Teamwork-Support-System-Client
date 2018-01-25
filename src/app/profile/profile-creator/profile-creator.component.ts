import {Avatar} from '../model/avatar.model';
import {Profile} from '../model/profile.model';
import {PrefferedRole} from '../model/preffered-role.model';
import {Skill} from '../model/skill.model';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProfileService } from "../service/profile.service";
import { Router } from "@angular/router";

import { DialogComponent } from "../../util/dialog/dialog.component";
import { DialogProperties } from "../../util/dialog/dialog-properties.model";


@Component({
  selector: "app-profile-creator",
  templateUrl: "./profile-creator.component.html",
  styleUrls: ["./profile-creator.component.scss"],
  providers: [ProfileService]
})
export class ProfileCreatorComponent implements OnInit {
  
  title: string = "#ProfileCreator";
  profileForm: FormGroup;

  dialogProperties: DialogProperties = new DialogProperties('Performing authentication');
  openDialog: boolean;

  skills: Array<Skill> = new Array();
  prefferedRoles: Array<PrefferedRole> = new Array();
  file: File;

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit() {
  
    this.openDialog = false;

    if (localStorage.getItem("userId") === null) {
      this.router.navigate(["/login"]);
    }

    this.profileForm = this.formBuilder.group({
      name: this.formBuilder.group({
        firstName: ["", Validators.required],
        lastName: ["", Validators.required]
      }),
      avatar: [""],
      skills: [""],
      prefferedRoles: [""],
      skype: ["", Validators.required]
    });
  }

  closedDialog(event) {
    if (event) this.openDialog = false;

    this.dialogProperties.isError ? null : this.router.navigate(['/app']);
  }

  //TODO need to handle avatars
  saveProfile(profile: Profile) {

    this.openDialog = true;
    this.dialogProperties.showLoader = true;
    
    profile.skills = this.skills;
    profile.avatar = new Avatar("assets/avatar6.jpg");
    profile.prefferedRoles = this.prefferedRoles;
    console.log(profile);
    this.profileService.addProfile(profile)
      .subscribe(response => {
        this.dialogProperties.message = "Created profile successfully";
        this.dialogProperties.isError = false;
      }, error => {
        if (error.status === 409) {
          this.dialogProperties.message = "Problem with create profile";
          this.dialogProperties.isError = true;
        }
    });
    this.dialogProperties.showLoader = false;
  }

  addSkill(skill) {
    this.skills.push(new Skill(skill));
    this.profileForm.controls["skills"].reset();
  }

  addRole(role) {
    this.prefferedRoles.push(new PrefferedRole(role));
    this.profileForm.controls["prefferedRoles"].reset();
  }

  removeSkill(index) {
    this.skills.splice(index, 1);
  }

  removeRole(index) {
    this.prefferedRoles.splice(index, 1);
  }

  loadFile(event) {
    this.file = event.srcElement.files[0];
    console.log(this.file);
  }
}
