import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkersFinderService } from '@services/workers-finder.service';
import { WorkerService } from '@services/worker.service';
import { Profile } from '@models/profile.model';
import { ProfileService } from '@services/profile.service';

@Component({
  selector: 'app-add-new-worker',
  templateUrl: './add-new-worker.component.html',
  styleUrls: ['./add-new-worker.component.scss'],
  providers: [ProfileService, WorkerService]
})
export class AddNewWorkerComponent implements OnInit {

  newWorkerForm: FormGroup;
  showLoadedWorker: boolean;
  loadedProfile: Profile;

  constructor(private formBuilder: FormBuilder,
              private workersFinderService: WorkersFinderService,
              private workerService: WorkerService,
              private profileService: ProfileService) { }

  ngOnInit() {

    this.newWorkerForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
    this.onChange();
  }

  onChange() {
    this.newWorkerForm.valueChanges.subscribe(val => {
      if (val.email.length > 5)  {
        this.profileService.find(val.email).subscribe(profile => {
          console.log(profile);
          this.loadedProfile = profile;
          console.log(this.loadedProfile);
        }, error => {});
      }
    });
  }

  public sendRequestToJoin(workers_email): void {
    this.workerService.addUserToProject(workers_email);
  }
}
