import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile, Skill, Avatar, PrefferedRole } from '@models/profile.model';
import { ProfileService } from '@services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-creator',
  templateUrl: './profile-creator.component.html',
  styleUrls: ['./profile-creator.component.scss'],
  providers: [ProfileService]
})
export class ProfileCreatorComponent implements OnInit {

  skills: Array<Skill> = new Array();
  roles: Array<PrefferedRole> = new Array();
  profileForm: FormGroup;
  temp: any;
  file: File;

  constructor(private formBuilder: FormBuilder, private profileService: ProfileService, private router: Router) { }

  ngOnInit() {

    this.temp = {'aaa': null, 'b': null};

    if (localStorage.getItem('userId') === null) {
      this.router.navigate(['/login']);
    }

    this.profileForm = this.formBuilder.group({
      name: this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName:  ['', Validators.required]
      }),
      avatar: [''],
      skills: [''],
      prefferedRoles: [''],
      skype: ['', Validators.required],
      nationality: ['', Validators.required]
    });
  }

  saveProfile(profile: Profile) {
    profile.skills = this.skills;
    profile.avatar = new Avatar('assets/avatar6.jpg');
    profile.prefferedRoles = this.roles;
    console.log(profile);
    this.profileService.addProfile(profile).subscribe();
  }

  addSkill(skill) {
    this.skills.push(new Skill(skill));
    this.profileForm.controls['skills'].reset();
  }

  addRole(role) {
    this.roles.push(new PrefferedRole(role));
    this.profileForm.controls['prefferedRoles'].reset();
  }

  removeSkill(index) {
    this.skills.splice(index, 1);
  }

  loadFile(event) {
    this.file = event.srcElement.files[0];
    console.log(this.file);
  }

}
