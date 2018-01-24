import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from '@models/profile.model';
import { ProfileService } from '@services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-finder',
  templateUrl: './user-finder.component.html',
  styleUrls: ['./user-finder.component.scss'],
  providers: [ProfileService]
})
export class UserFinderComponent implements OnInit {

  newWorkerForm: FormGroup;
  foundUser: boolean;
  loadedProfile: Profile;

  constructor(private formBuilder: FormBuilder,
              private profileService: ProfileService,
              private router: Router) { }

  ngOnInit() {

    this.newWorkerForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
    this.foundUser = false;
    this.onChange();
  }

  onChange() {
    this.newWorkerForm.valueChanges.subscribe(val => {
      if (val.email.length > 5)  {
        this.profileService.find(val.email).subscribe(profile => {
          this.loadedProfile = profile;
          this.foundUser = true;
        }, error => { this.foundUser = false; });
      }
    });
  }

  prepareJobOffer() {
    console.log(this.router);
    this.router.navigate(['app/project/offer-preparation', this.newWorkerForm.controls['email'].value]);
  }

}
