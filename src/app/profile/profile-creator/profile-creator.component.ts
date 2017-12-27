import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile, Skill, Avatar } from '@models/profile.model';
import { ProfileService } from '@services/profile.service';

@Component({
  selector: 'app-profile-creator',
  templateUrl: './profile-creator.component.html',
  styleUrls: ['./profile-creator.component.scss'],
  providers: [ProfileService]
})
export class ProfileCreatorComponent implements OnInit {

  skills: Array<Skill> = new Array();
  profileForm: FormGroup;
  temp: any;
  file: File;

  constructor(private formBuilder: FormBuilder, private profileService: ProfileService) { }

  ngOnInit() {

    this.temp = {'aaa': null, 'b': null};

    this.profileForm = this.formBuilder.group({
      name: this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName:  ['', Validators.required]
      }),
      avatar: [''],
      skills: [''],
      skype: ['', Validators.required],
      nationality: ['', Validators.required]
    });
  }

  saveProfile(profile: Profile) {
    profile.skills = this.skills;
    profile.avatar = new Avatar('some.jpg');
    this.profileService.addProfile(profile).subscribe();
  }

  addSkill(skill) {
    this.skills.push(new Skill(skill));
    this.profileForm.controls['skills'].reset();
  }

  removeSkill(index) {
    this.skills.splice(index, 1);
  }

  loadFile(event) {
    this.file = event.srcElement.files[0];
    console.log(this.file);
  }

  clicked() {
    console.log('clicked');
  }

}
