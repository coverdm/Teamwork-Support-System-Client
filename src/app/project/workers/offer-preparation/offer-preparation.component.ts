import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MaterializeDirective } from 'angular2-materialize';
import { WorkerService } from '@services/worker.service';
import { JobOffer } from '@models/jobOffer.model';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '@services/profile.service';
import { MinProfile } from '@models/profile.model';

@Component({
  selector: 'app-offer-preparation',
  templateUrl: './offer-preparation.component.html',
  styleUrls: ['./offer-preparation.component.scss'],
  providers: [ WorkerService, ProfileService]
})
export class OfferPreparationComponent implements OnInit {

  offerForm: FormGroup;
  available_positions = ['FRONTEND_DEVELOPER'];
  position: string;
  loadedProfile: MinProfile;
  userId: string;

  constructor(private formBuilder: FormBuilder,
  private workerService: WorkerService,
private activateRoute: ActivatedRoute,
private profileServices: ProfileService) { }

  ngOnInit() {

    this.offerForm = this.formBuilder.group({
      firstName: [{value: '', disabled: true}],
      lastName: [{value: '', disabled: true}],
    });

    this.activateRoute.params.subscribe(params => {
      this.userId = params.userId;
      this.profileServices.getMinProfile(this.userId).subscribe(minProfile => {
        this.offerForm.controls['firstName'].setValue(minProfile.name.firstName);
        this.offerForm.controls['lastName'].setValue(minProfile.name.lastName);
      });

    });
  }

  sendJobOffer(offer: JobOffer) {
    offer.userId = this.userId;
    offer.role = this.position;
    this.workerService.sendJobOffer(offer).subscribe();
  }

  selectPosition(event) {
    this.position = event;
  }

}
