import {Profile} from '../../profile/model/profile.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileViewComponent } from '../../profile/profile-view/profile-view.component';

@Component({
  selector: 'app-user-finder',
  templateUrl: './user-finder.component.html',
  styleUrls: ['./user-finder.component.scss']
})
export class UserFinderComponent implements OnInit {

  title: string = '#UserFinder';
  userId: string;

  enablePreparingOffer: boolean;

  userFinderForm: FormGroup;
  foundUser: boolean;
  loadedProfile: Profile;

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {

    this.userFinderForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.foundUser = false;
  }

  loadUser(email){
    this.userId = email;
  }

  isFound($event){
    this.enablePreparingOffer = $event;
  }

  prepareJobOffer() {
    this.router.navigate(['app/project/' + localStorage.getItem('uuid') +  '/offer-preparation', this.userFinderForm.controls['email'].value]);
  }

}
